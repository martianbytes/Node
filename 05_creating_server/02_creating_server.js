const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/about') {
        res.end("This is the about page.")
    }
    else if(req.url === '/contact-us') {
        res.end("This is the contact us page.")
    }
    if(req.url === '/home') {
        res.end("This is the home page.")
    }
    else {
        res.writeHead(404)
        res.end("Page not found")
    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening on port 8000")
})