import { useState,useEffect } from 'react'
import * as React from 'react';
import { Button , Grid}from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import database from './database.json';
import {useAsync} from 'react-use';
import Divider from '@mui/material/Divider';
import { ethers } from "ethers";
import abi from '../Contract/NftMarket.json'

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/c9b4b49dbb1545fbb66893a3ddfe02b7");
const theme = createTheme();

function MediaCardLoading(props){
 
  return (
  <Card>
    <CardContent>
      <Typography>
         {props.text}
      </Typography>
    </CardContent>
  </Card>
  )
}

async function mint(ceramicUrl){
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const contract = new ethers.Contract("0xb493BA325Be005F9275ADBEE1bD3438e7F361F42", abi.output.abi, signer);
  const tx = await contract.mintChainlink(ceramicUrl)
  console.log(tx)
}

function MediaCard(props) {
  const ceramicUrl = props.data.ceramicUrl.split("/").at(-1)
  const state = useAsync(async () => {
    const response = await fetch(props.data.metadata);
    const result = await response.json()
    return result
  }, []);
  return (
    <div style={{width:"512px",float:"left",margin:"5px"}}>
      {state.loading
      ? <MediaCardLoading text="Loading..."/>
      : state.error ? <MediaCardLoading text={`Error: ${state.error.message}`}/>    
      : 
    <Card >
      <Typography variant="h2" component="div" align="center" style={{color:"darkblue"}}>
        {state.value.name}
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        height="512"
        image={state.value.image.replace("https://gateway.pinata.cloud/","https://ipfs.io/")}
        alt="green iguana"
        />
      <CardContent>
        <Typography variant="h4" component="div" align="center" style={{color:"darkblue",height:"85px"}}>
          {state.value.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={async () => await mint(ceramicUrl)} variant="contained" size="large">Buy</Button>
      <Typography variant="h4" component="div" align="center" style={{color:"darkblue",marginLeft:"205px"}}>
          Price: Ξ{props.data.price}
        </Typography> 
      </CardActions> 
    </Card>
      }
     </div>
  );
}



function App() {
  return (
  <ThemeProvider theme={theme}>
    <Container component="main" >
      <CssBaseline />
      {database.map((nft) => <MediaCard data={nft} />)}
    </Container>
  </ThemeProvider>
  )
}

export default App
