const http = require('http')
const { stringify } = require('querystring')
const server = http.createServer(async(req,res)=>{
    res.writeHeader(200,{'Content-Type':'text/html'})
    const response = await fetch('https://fakestoreapi.com/products/')
    const data = await response.json()
    const myhtml = `<html>
    <head>
        <title>My Products</title>
        <style>
            .container{
                padding : 30px;
                border : 2px solid gray;
                background-color: black;
                color : white;
                display : flex;
                flex-direction: column;
                justify-content : center;
                align-items : center
            }
            
        </style>
    </head>
    <body>
    <h1>My Products</h1>
    ${
        data.map((item)=>{
            return (`<div class="container">
                        <img src="${item.image}" height="300" width="300" alt = "${item.title}">
                        <h2>Item id : ${item.id}</h2>
                        <h2>Title : ${item.title}</h2>
                        <h2>Category : ${item.category}</h2>
                        <p>Description : ${item.description}</p>
                        <h2>Price :$ ${item.price}</h2>
                        <h2>Rating : ${item.rating.rate} Count : ${item.rating.count}</h2>
                        <br>
                    </div>`)
                   
        })
    }
    


    </body>
    </html>`
    // res.end(JSON.stringify(data))
    res.end(myhtml)
})

server.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port 9000")
})