const http = require('http')


// create a server now
const server = http.createServer((req, res) => {
    // response head
    res.writeHead(200, {'Content-Type': 'application/json'});
    // response body
    res.end(JSON.stringify({'message': "This is the new message"}))
})


const PORT = 3000;
server.listen(3000, ()=> {
    console.log(`Server is running in port ${PORT}`)
})