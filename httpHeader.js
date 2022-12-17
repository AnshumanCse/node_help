const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()

    }
    else if(req.url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()

    }else if(req.url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Contact Page</h1>')
        res.end()

    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000, () => {
    console.log('Server is running at 5000')
})