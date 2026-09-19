const http = require('http')

const server = http.createServer();

server.on('request', (request, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'This is the newest message available on the server'}));
})

server.listen(8000)