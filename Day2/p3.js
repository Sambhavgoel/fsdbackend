const http = require("http")
const fs = require('fs/promises')


const server=http.createServer(async(req,res)=>{
    res.statusCode=200
    // res.setHeader({'Content-Type':'text/html'})
    res.setHeader('Content-Type','text/html')
    const data = await fs.readFile('./index.html')
    res.end(data)
})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log("Error : ",err)

    }
    console.log("Server is running on port : 9000")
})