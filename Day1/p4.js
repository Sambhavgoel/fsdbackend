const fs = require('fs')

const data = fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err)
    {
        console.log("error : ",err)
        return;
    }
    console.log(data)
})