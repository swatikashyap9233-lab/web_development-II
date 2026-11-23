const fs= require('fs');

fs.writeFile('sample.txt','welcome to fsd',(err)=>{
    if(err){
        console.log('error creating file',err);
        return;
    }
    console.log('file create successfully');
})
