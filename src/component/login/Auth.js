import Storage from '../../utils/Storage.json'
import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import {ethers} from  'ethers'
import axios from 'axios'
import base64ToImage from '../../utils/base64ToImage';
import { create } from 'ipfs-http-client'
import {Text,Input,Center, Box } from '@chakra-ui/react'
const Contract = "0x87864ca5941Ee31127AB46B4af72fE9D314A8BFD"
export default async function Auth(img,email,action)
{ 
   
   
   getIpfs(email).then((res)=>
   {
    return  fetch(`https://ipfs.io/ipfs/${res}`)
   }).then((originalimg)=>{

    let formData = new FormData();
  
    formData.append("actualimage",originalimg)
    formData.append("chunkfiles",img)
    formData.append("action",action)
    console.log(original)
    console.log(img)
    console.log(tempimg)
    // axios({
    //     method:'post',
    //     body:formData,
    //     url:'https://34fe-2401-4900-22c0-b9c1-3ce8-6a00-fb37-2476.in.ngrok.io/authenticate'
    // })
   })
}


async  function getIpfs(email)
{
    if (typeof window.ethereum !== 'undefined') {
        console.log("getipfs")
        console.log(email)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        const contract = new ethers.Contract(Contract,Storage.abi,provider)
        
       
            console.log(email)
           return await contract.getfile(email);
           
          
          
       
       
      } 
}
