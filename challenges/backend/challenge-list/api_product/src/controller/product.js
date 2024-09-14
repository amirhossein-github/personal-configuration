const
    responsesManager = require('./../tools/responseManager'),
    productModel = require('./../model/product')

function get(req, res){
    try {
        const data = productModel.get()
        responsesManager.code_200(req, res, data)
        
    } catch (error) { responsesManager.code_500(req, res, error) }
}

const productController = {
    get

}

module.exports = productController