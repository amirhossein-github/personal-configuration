const
    http = require('http'),
    responsesManager = require('./tools/responseManager'),
    automation = require('./tools/automation'),
    productController = require('./controller/product');

// server init
const
    PORT = 3000,
    SERVER = http.createServer(server).listen(PORT);
    
// manage the server
function server(req, res){
    const { url, method } = req

    switch (true){
        case /^\/$/.test(url):
            responsesManager.code_200(req, res, {data: "Welcome to 'Simple API Product'"})
            break

        case /^\/reset\/$/.test(url):
            // Setting the data to the initial state and also giving them an ID
            automation.setData()
            responsesManager.code_200(req, res, {data: "All data returned to the first state"})
            break
        
        case /^\/api\/products\/$/.test(url):
            switch (method) {
                case 'GET':
                    productController.get(req, res)
                    break;

                case 'POST':
                    productController.change(req, res)
                    break;

                case 'OPTIONS':
                    responsesManager.validOptions(req, res, ["GET", "POST", "OPTIONS"])
                    break;
            
                default:
                    responsesManager.code_405(req, res);
                    break;
            }
            break

        case /^\/api\/products\/[a-z0-9-]{36}\/$/.test(url):
            switch (method) {
                case 'GET':
                    productController.get(req, res)
                    break;

                case 'PUT':
                    productController.change(req, res)
                    break
                
                case 'DELETE':
                    productController.remove(req, res)
                    break

                case 'OPTIONS':
                    responsesManager.validOptions(req, res, ["GET", "DELETE", "PUT", "OPTIONS"])
                    break;
            
                default:
                    responsesManager.code_405(req, res);
                    break;
            }
            break

        default:
            responsesManager.code_404(req, res);
            break;

    }
};
