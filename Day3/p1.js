const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'})
    if(req.url==='/getdata' && req.method==='GET')
    {
        const data = {name:'John',age:30}
        res.end(JSON.stringify(data))
        return
    }
    else if(req.method==="POST" && req.url==='/setdata')
    {
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            const data = JSON.parse(body)
            console.log('Received data: ',data)
            res.end(JSON.stringify({message : 'Data Received successfully'}))
        })
        return
    }
    // res.end('Hello World')
})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("Server is run on port 9000")
})