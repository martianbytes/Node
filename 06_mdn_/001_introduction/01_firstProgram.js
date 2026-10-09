const http = require('http')

const port = 8000;;
const hostname = '127.0.0.1';


const server = http.createServer((req, res)=> {
    // we aren't checking the request, we just gonna respond
    // write a head (200 sucess, text/plain)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //after the head we gonna close the connection now with some text maybe
    res.end("Hello this is node js in action.\n");
})

// now inorder to work , the server needs a request and it will 
// only get the requests if it is actively listening

server.listen({port: port, hostname:hostname}, () => {
    console.log(`Listening to the port ${port} in ${hostname}`)
})
