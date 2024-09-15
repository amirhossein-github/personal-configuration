const
    responsesManager = require('./../tools/responseManager'),
    productModel = require('./../model/product')
    
function get(req, res){
    const [,,,id] = req.url.split('/')

    if (id === ''){
        try {
            const data = productModel.get()
            responsesManager.code_200(req, res, data)
            
        } catch (error) { responsesManager.code_500(req, res, error) }
    } else {
        try {
            const data = productModel.get(id)
            responsesManager.code_200(req, res, data)
            
        } catch (error) { responsesManager.code_500(req, res, error) }
    }
}

function change(req, res){
    const [,,,id] = req.url.split('/')

    if (id === ''){

        let fullData = ''
        try {
            // GET DATA
            req.on('data', function (chunk) {
                fullData += chunk;
            });
            
            req.on('end', function () {
                // if data is empty
                if (fullData === ''){
                    return responsesManager.code_200(req, res, {data: 'You have not sent any data'})

                }

                // if json can pars it as json
                try {
                    JSON.parse(fullData);

                } catch (e) {
                    return responsesManager.code_200(req, res, {data: 'The data structure you sent is not of type json'})

                }

                const creation = productModel.create(JSON.parse(fullData)[0])
                creation ?
                responsesManager.code_200(req, res, {data: 'Your product has been added to the product list'}):
                responsesManager.code_200(req, res, {data: 'Product data is not valid'})
            });

        } catch (error) { responsesManager.code_500(req, res, error) }

    } else {
        let fullData = ''
        try {
            // GET DATA
            req.on('data', function (chunk) {
                fullData += chunk;
            });
            
            req.on('end', function () {

                // if data is empty
                if (fullData === ''){
                    return responsesManager.code_200(req, res, {data: 'You have not sent any data'})

                }

                // if json can pars it as json
                try {
                    JSON.parse(fullData);

                } catch (e) {
                    return responsesManager.code_200(req, res, {data: 'The data structure you sent is not of type json'})

                }

                const creation = productModel.create(JSON.parse(fullData)[0], id)
                creation ?
                responsesManager.code_200(req, res, {data: 'Your product has been added to the product list'}):
                responsesManager.code_200(req, res, {data: 'Product data is not valid'})
            });

        } catch (error) { responsesManager.code_500(req, res, error) }

    }
}

function remove(req, res){

    try {
        // 1) ID
        const [,,,id] = req.url.split('/')

        // 2) Get full data
        productModel.remove(id)

        // 3) Make response
        responsesManager.code_200(req, res, {data: 'The desired data was deleted'})
    } catch (error) { responsesManager.code_500(req, res, error.message) }

}

const productController = {
    get,
    change,
    remove
}

module.exports = productController
