import dotenv  from 'dotenv'
import { writeFile } from 'node:fs/promises'
import { ModelManager } from '@glazed/devtools'
import { model } from '../nft-market-info/dist/model.cjs'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DIDDataStore } from '@glazed/did-datastore'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
import { fromString } from 'uint8arrays'
import { ethers } from 'ethers'
import nftslist from "./nftslist.json"
dotenv.config()
console.log(ethers.utils.hexlify(ethers.utils.toUtf8Bytes("QmTN32qBKYqnyvatqfnU8ra6cYUGNxpYziSddCatEmopLR/metadata/api/item/3.json50000000000000000xC3AD9391150F96Ce4f254F81F440C203Bae14e51")))
nftslist.data.map((nft) => nft.creator = process.env.CREATOR_ADDRESS)

const noteUrl = process.env.CERAMIC_NODE;
async function main(){
    const key = fromString(process.env.SEED, 'base16')
    const did = new DID({
        provider: new Ed25519Provider(key),
        resolver: getResolver(),
    })
    await did.authenticate()
    const ceramic = new CeramicClient(noteUrl)
    ceramic.did = did
    const manager = new ModelManager(ceramic)
    manager.addJSONModel(model)
    const promises  = nftslist.data.map(async (nft) => { 
        console.log(`creating ${nft.name}nft`)
        await manager.createDefinition( `${nft.name}nft`, {
            name: `${nft.name}nft`,
            description: `definition for ${nft.name}nft`,
            schema: await manager.getSchemaURL(Object.keys(model.schemas))
        })
        const published = await manager.toPublished()
        const dataStore = new DIDDataStore({ ceramic, model: published })
        const price = Number(ethers.utils.parseEther(nft.price))
        const contract =  ethers.utils.hexlify(ethers.utils.toUtf8Bytes(`${nft.metadata.replace("https://ipfs.io/ipfs/","")}${price}${nft.creator}`))
        const save = await dataStore.set(`${nft.name}nft`, { data : {
            creator : nft.creator,
            metadata : nft.metadata,
            price: price,
            contractData : contract
        }})
        const idPath =  save.toUrl().split('//')[1]
        nft.ceramicUrl = `${noteUrl}/api/v0/streams/${idPath}`
        nft.ethPprice =price
        nft.contractData = contract
        console.log(`${nft.name}nft ${noteUrl}/api/v0/streams/${idPath}`)
        return nft
    })
    const result = await Promise.all(promises)
    await writeFile('./src/database.json',JSON.stringify(result))
}
main()