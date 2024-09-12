const
    http = require('http');

// server init
const
    PORT = 3000,
    SERVER = http.createServer(server).listen(PORT);
    
// manage the server
function server(req, res){
    const { url } = req

    switch (url){
        case '/':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({data: 'Hello World!'}));
            break

        default:
            res.writeHead(404);
            res.end(JSON.stringify({[url]: '404, Not Found'}));
    }
};
