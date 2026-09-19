const http = require('http')

const server = http.createServer((req, res)=> {
    const {url, method} = req;

    if(url === '/' && method === 'GET') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Hello World, This is the beginning.</h1>")
    }

    else if (method === 'GET' && url === '/api/status') {
        // api endpoint => not clear data just send json
        res.writeHead(200, {"Content-Type": 'application/json'});
        res.end(JSON.stringify({status: 'ok', time: new Date() }))
    }

    else {
        // not found
        res.writeHead(404, {'Content-Type':'text/plain'})
        res.end('404 not found')
    }
})

server.listen(3000, ()=>{console.log("The server is running on port 3000")})