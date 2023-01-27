import { useState } from "react"
import Compressor  from "compressorjs";
import {ethers} from  'ethers'
import Storage from "../contract/Storage.json";
import { type } from "@testing-library/user-event/dist/type";
export default function Home()
{
  const [file,setFile] = useState("");
  const Contract = "0xa1a5AC73b348544b281da7dB1cB4cc314690BbdA"
  const [filestr,setFilestr] = useState("");
  const [compressedFile, setCompressedFile] = useState("");
  const [ans,ansSet] = useState("")
   function handleSubmit(event)
   {
 
    (async function(){
      const filereader = new FileReader()
      await filereader.readAsDataURL(file)
      filereader.onload = () =>
      {
       setFilestr(filereader.result)
  
  
      }

      await new Compressor(file, {
        quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
        success: (compressedResult) => {
          // compressedResult has the compressed file.
          // Use the compressed file to upload the images to your server.        
          setCompressedFile(compressedResult)
         
        },
      });
      await addToBlock();
    })();
 
    
  
  }

   function handleChange(event)
   {
   setFile(event.target.files[0])
   
   }

  async function blockCall()
  {

    if(typeof window.ethereum !='undefined')
    {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      const contract = new ethers.Contract(Contract,Storage.abi,provider)
      
      try{
         const data = await contract.retrieve();
         ansSet(data)
        
     } 
     catch{
      
         const data = "error"

         ansSet(data)
     }
     }
  }


   async function addToBlock(){
    
    if(typeof window.ethereum!=='undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
      await provider.send("eth_requestAccounts", [])
     
      
      const network  = await provider.listAccounts();
      const signer = provider.getSigner( );
      
      const contract = new ethers.Contract(Contract, Storage.abi,signer)
 
      const transaction = await contract.store(filestr) 
      console.log("debug2")
     await transaction.wait()
    
    }
    else{
      alert("error")
    }

  }
  
    return(
    <>
    
    <input type='file' onChange={handleChange}></input><br/>
    <button onClick={handleSubmit}>Submit</button><br/>
    {compressedFile&& <img src={URL.createObjectURL(compressedFile)} width='200px'/>}<br/>
    <button onClick={blockCall}>Get</button><br/>
    {ans&&<>{ans}</>}
    </>
    )
    }