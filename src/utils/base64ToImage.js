async function  base64ToImage(url,filename) {

    const  mimeType =  (url.match(/^data:([^;]+);/)||'')[1];
     return (fetch(url)
         .then(function(res){return res.arrayBuffer();})
         .then(function(buf){return new File([buf], filename, {type:mimeType});})
     );
   }

   export default base64ToImage;