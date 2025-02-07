const fs = require('fs')

const data = "all good"

fs.writeFile("./data2.txt",data,(err)=>{
    if(err)
    {
        console.log("error occured : ",err)
       
    }
    else{
        console.log("file written successfully")
    }
})