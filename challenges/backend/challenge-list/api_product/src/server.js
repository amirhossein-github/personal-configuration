const
    http = require('http'),
    responsesManager = require('./tools/responseManager'),
    { v4: uuidv4 } = require('uuid');
    
// server init
const
    PORT = 3000,
    SERVER = http.createServer(server).listen(PORT);
    
// manage the server
function server(req, res){
    const { url } = req

    switch (url){
        case '/':
            responsesManager.code_200(req, res, {data: "Welcome to 'Simple API Product'"})
            break

        default:
            responsesManager.code_404(req, res);
            break;
    }
};
