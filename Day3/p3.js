// student 
// roll no name class sec

const http = require('http')
const fs  = require('fs/promises')

const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    const data = await fs.readFile('./student.json')
    if(req.url==='/getdata'&& req.method==='GET')
    {
        res.end(data)
        return
    }
    else if(req.url==='/setdata' && req.method==='POST')
    {
        let query=''
        req.on('data',(chunk)=>{
            query+=chunk
        })

        req.on('end',async()=>{
            const part = JSON.parse(query)
            const all = await fs.readFile('./student.json')
            const data = JSON.parse(all)
            function check(part,data)
            {
                data.map((single_data)=>{
                    if(single_data.roll_no===part.roll_no)
                    {
                        res.end(JSON.stringify({message:"Wrong data entered"}))

                    }
                    return
                })
            }
            check(part,data)
            console.log("Received data : ",part)
            data.push(part)
            res.end(JSON.stringify({message:"Data recieved successfully",data : data}))
            

        })
    }

})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log("Error is occured on port 9000")
        return
    }
    console.log("Server is running on port 9000")
})