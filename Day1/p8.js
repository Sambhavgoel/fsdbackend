const fs = require('fs')

fs.mkdir('Mydir1',{recursive:true},(err)=>{
    if(err)
    {
        console.log("error : ",err)
        return
    }
    else{
        console.log("directory created successfully")
    }
})