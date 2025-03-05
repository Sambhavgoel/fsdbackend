const express = require("express")

const app = express()

app.use(express.json())

let users = [
    // {id:1, name:"john"},
    // {id:2, name:"jane"},
    // {id:3, name:"samuel"}
]



app.get('/api/users',(req,res)=>{
    res.json(users)
})

app.get('/users',(req,res)=>{
    console.log("running")
    res.send("Hello World of backend")

})



app.post('/users',(req,res)=>{
    const data = req.body
    const newid = users.length>0?users[users.length-1].id+1:1
    data.id = newid
    users.push(data)
    res.status(200).json({message : 'data recieved',data : data})

})



app.listen(9000,(err)=>{
    if(err)
    {
        console.err(err)
        return
    }
    console.log("Server is running on port : ",9000)
})



