const http = require('http')
const fs = require('fs/promises')

const server = http.createServer(async(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    const data = await fs.readFile('./file.json',"utf-8")
    const newdata = JSON.parse(data).map((item)=>{ return item.name})
    // JSON.stringify(newdata)
    res.end(JSON.stringify(newdata))

})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)

    }
    console.log('Server is running on port : 9000')
})