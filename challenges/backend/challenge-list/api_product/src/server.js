const
    http = require('http'),
    responsesManager = require('./tools/responseManager'),
    automation = require('./tools/automation'),
    productController = require('./controller/product');

// server init
const
    PORT = 3001,
    SERVER = http.createServer(server).listen(PORT);
    
// manage the server
function server(req, res){
    const { url, method } = req

    switch (url){
        case '/':
            responsesManager.code_200(req, res, {data: "Welcome to 'Simple API Product'"})
            break

        case '/reset/':
            // Setting the data to the initial state and also giving them an ID
            automation.setData()
            responsesManager.code_200(req, res, {data: "All data returned to the first state"})
            break
        
        case '/api/products/':
            productController.get(req, res)
            break;

        default:
            responsesManager.code_404(req, res);
            break;

    }
};
