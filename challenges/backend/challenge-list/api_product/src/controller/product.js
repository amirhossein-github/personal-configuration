const
    method = require('./../tools/method'),
    responsesManager = require('./../tools/responseManager'),
    productModel = require('./../model/product');
    
//* [DONE]
function get(req, res){
    // 1) Get data
    // 1-a) without ID
    let data
    const [,,,id] = req.url.split('/')
    if (id === '') {
        data = productModel.get()

    // 1-b) with ID
    } else {
        data = productModel.get(id)

    }

    // 2) Checking data
    switch (data) {
        // A) undefined
        case undefined:
            responsesManager.code_500(req, res); break;

        // B) Empty
        case '':
            responsesManager.code_404(req, res); break;

        // Z) If data found successfully
        default:
            responsesManager.code_200(req, res, data); break;
    }
}

//!
function add(req, res){
    // 1) Get data
    const data = productModel.get()

    // 2) Checking data
    if (data === undefined){
        responsesManager.code_500(req, res);

    }

    // 3) Read data from request body
    let userData = '', jsonData;
    try {
        req.on('data', function (chunk) {
            userData += chunk;
        });
        req.on('end', function () {
            
            // 4) Data checking
            // 4-a) If data is empty
            if (userData === ''){
                return responsesManager.code_200(req, res, {message: 'You have not sent any data'})
                
            }
            // 4-b) If json can pars it as json
            try {
                jsonData = JSON.parse(userData)

            } catch (e) { return responsesManager.code_200(req, res, {message: 'The data structure you sent is not of type json'}) }
            // 4-c) Valid data
            if (!method.dataStructureChecking(jsonData)){
                return responsesManager.code_200(req, res, {message: 'The data structure you sent is not valid'})
            }

            //!---------------------------------------------------------------------------------------
            return responsesManager.code_200(req, res, {data: 'Your item has been added to the list'})
            //!---------------------------------------------------------------------------------------
            
            // 5) Adding valid data to database
            productModel.add(jsonData)
            responsesManager.code_200(req, res, {data: 'Your item has been added to the list'})
        })
    } catch (error) { 
        responsesManager.code_500(req, res, {message: 'fail to read body request'})
        console.log(`[ERROR][reading request body]: ${error}`)
    }

}
const productController = {
    get,
    add
}

module.exports = productController