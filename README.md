#  hybrid NFT market
this is a hybrid NFT market my original idea was to build an NFT marketplace is the creator upload the metadata to the ceramic network and the buy was paid to mint the NFT, but a did not have sufficient to time add all the wanted features 
![Screenshot from 2021-10-21 00-39-11](https://user-images.githubusercontent.com/52639395/138210779-0fccaf50-1ef4-40f2-8e69-605d62d50d9a.png)

### how to run

1. [deploy the contract using remix](https://remix.ethereum.org/#url=https://github.com/lucasespinosa28/nftmarket/blob/master/Contract/ceramicChainlink.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)
2. you will need to send a link token to pay to use the chainlink oracle contract, use the [faucet](https://faucets.chain.link/kovan)
3. in script, folder add your NFT metadata in the file nftslist.json
4. in the env file add your seed of ceramic network
5. run the script build.js to upload your metadata in the ceramic network,```npm run market ```
6. add contract address in the App.jsx, ```  const contract = new ethers.Contract("contract address", abi.output.abi, signer);```
7. build the basic market place to display the NFT to sell,```npm run dev ```
