const http = require('http')
const fs = require('fs/promises')

const server = http.createServer(async(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    const response = (await fetch('https://dummyjson.com/products'))
    const data = await response.json()
    const newdata=data.products.map((item)=>{return item.title})
    const ans = newdata.map(item=>`<li>${item}</li>`).join("")
    res.end(ans)

})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)

    }
    console.log('Server is running on port : 9000')
})