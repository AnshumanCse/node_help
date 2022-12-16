// built in modules
// fs 
// os 
// http
// path 

const http = require('http')

const port = 8000
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end(`<h1>Welcome to home page</h1>`)
    }
    if(req.url === '/about') {
        res.end(`<h1>Welcome to about page</h1>`)
    }else{
        res.end(`<h1>Oops!  Page can not find sorry bro</h1>`)

    }
})
server.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
