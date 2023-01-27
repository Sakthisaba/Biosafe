
pragma solidity >= 0.8.0 < 0.9.0;



contract Storage {
  
  mapping(string=>string)  files;

   
    
    function getfile(string memory email) public returns(string memory){
        return files[email];
    }

  
    function setfile(string memory email,string memory hash) public {
       files[email] = hash; 
    }
}