const fs=require('fs')

fs.rmdir('./Mydir1',(err)=>{
    if(err) throw err;
    console.log('folder deleted')
})