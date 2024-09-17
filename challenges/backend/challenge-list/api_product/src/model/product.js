const
    method = require('./../tools/method')
    static = require('./../data/static')
    fs = require('fs'),
    { v4: uuidv4 } = require('uuid');

//* [DONE]
function get(id){
    try {
        // 1) Read file
        let data = fs.readFileSync(static.data.database.path)

        // 2) Convert ot the json
        data = JSON.parse(data)

        // 3) If [ID]
        if (id === undefined){
            // 3-a) return data
            return data

        } else {
            // 3-b) Find by id
            return method.findObjectByID(data, id)

        }

    // X) If have problem to read file, log it on console
    } catch (error) { console.log(`[ERROR][reading file]: ${error}`) }
}

//!

const productModel = {
    get
}

module.exports = productModel