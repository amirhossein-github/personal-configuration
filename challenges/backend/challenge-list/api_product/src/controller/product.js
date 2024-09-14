const
    responsesManager = require('./../tools/responseManager'),
    productModel = require('./../model/product')

function get(req, res){
    try {
        const data = productModel.get()
        responsesManager.code_200(req, res, data)
        
    } catch (error) { responsesManager.code_500(req, res, error) }
}

function post(req, res){
    let fullData = ''

    try {
        // GET DATA
        req.on('data', function (chunk) {
            fullData += chunk;
        });
        
        req.on('end', function () {
            const creation = productModel.create(JSON.parse(fullData)[0])
            creation ?
            responsesManager.code_200(req, res, {data: 'Your product has been added to the product list'}):
            responsesManager.code_200(req, res, {data: 'Product data is not valid'})
        });

    } catch (error) { responsesManager.code_500(req, res, error) }
}

const productController = {
    get,
    post

}

module.exports = productController