const express = require('express')
const fs = require('promises/fs')

const app = express()

app.use(express.json())

let users=[]

const readdata = ()=>{
    users = fs.readFile('./data.json','utf-8')

}

const writedata = ()=>{
    fs.writedata('./data.json',JSON.stringify(users,null,2))

}

app.get('./getdata',async(req,res)=>{
    readdata()
    res.json(users)
})

app.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log('Server is running on port 9000')
})

