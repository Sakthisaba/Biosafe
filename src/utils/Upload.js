import Storage from './Storage.json'


import { Web3Storage } from 'web3.storage'
import { create } from 'ipfs-http-client'
import * as IPFS from 'ipfs-core'
import { NFTStorage } from 'nft.storage'
import {ethers} from  'ethers'
import base64ToImage from './base64ToImage'
import logo from '../assets/logo.png'
const Contract = "0x87864ca5941Ee31127AB46B4af72fE9D314A8BFD"
const projectId ="xxxxxxxxxxxxxxxxxxxxxx"
const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxx"




async function Upload(file,usermail)

{
  console.log(usermail)
  const auth = 'Basic ' +"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

  const client = create({
    host:'ipfs.infura.io',
    port:'5001',
    protocol:'https',
    
    headers: {
      authorization: auth,
    }

  })

  

  base64ToImage(file,"biometric").then(async function(res)
    {
      
      return await client.add(res)


    }).then(res=>{console.log(res)
    UploadtoBlockChain(res.path,usermail)
    }).then(function(res){alert("Successfully register");},function(err){alert("Registeration failed")})
  //  const web3Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdmNzQwNTBEZDMxNWQ0MTdGRTgxYzQwOWQzNjY1NzdGMDAyOWY2NzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDczODA2NDcwNiwibmFtZSI6ImJpb21ldHJpYzEifQ.a454FSI_JOJ34G8m_SFr0a115GNwLry62ehFzyWNZKk";
  // // const client = new Web3Storage({token:web3Token})

  // // const files = await getFilesFromPath('../assets/logo.png')
  // const nftstorage = new NFTStorage({ token:web3Token })

  // const name ="biometric"
  // const description = "image/pngimage/pngimage/pngyug uygu yg uy gu ygyu"


  // blobCreationFromURL(file).then(async function(image)
  // { console.log(image)
  //   return await nftstorage.store({
  //    image,
  //     name,
  //     description,
  // })
  // }).then(res=>console.log(res))
  // fetch(file).then(res=>res.blob())
  // .then( blob=>{ return new File([blob],'biometric',{ type: "image/png" })})
  // .then(async function(image)
  // {
  //   return await client.store({
  //     name:"my biometric",
  //     description:"null",
  //     image:image
  //   }) 
  // })
  // .then(ipfs=>console.log(ipfs))
  // call client.store, passing in the image & metadata

  // const auth = 'Basic ' + Buffers.from(projectId+":"+apiKey).toString('base64')
  
  // const cid  = await client.add(file)
  // blobCreationFromURL(file).then((file)=>
  // {
  //   return client.put();
  // })\

  //   const ipfs = await client.put(files)
  // console.log(ipfs.path)
  // const client = new NFTStorage({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdmNzQwNTBEZDMxNWQ0MTdGRTgxYzQwOWQzNjY1NzdGMDAyOWY2NzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDQ5MDc5ODUzMCwibmFtZSI6ImJpb21ldHJpYyJ9.Wpm5UP3pKmLn5t0uEN_ysd205XJrhn8lauktavusBUo"})

  // console.log("Uploading..")

  

 
  // console.log(typeof file)
  // var image = new Image()
  // image.src = `${file}`
  //console.log(file)
    
    // connect to a different API
   
 

  // const ipfs =await client.store({
  //   name: "My biometric",
  // description: "Just try to funge it. You can't do it.",
  // image: await image
  //  })

    // call Core API methods

   
   
  // const id = await ipfs
  // UploadtoBlockChain(ipfshash.path,userid)

 
  
  
}


async function UploadtoBlockChain(ipfs,email)
{


    if(typeof window.ethereum!=='undefined'){
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
        await provider.send("eth_requestAccounts", [])
       
        
        const network  = await provider.listAccounts();
        const signer  = provider.getSigner( );
        
        const contract = new ethers.Contract(Contract, Storage.abi,signer)
        console.log(ipfs)
        const transaction = await contract.setfile(email,ipfs) 
        
       await transaction.wait()
      
      }
      else{
        alert("error")
      }
}

export default Upload;
