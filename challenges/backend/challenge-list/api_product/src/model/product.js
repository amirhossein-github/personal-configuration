const
    fs = require('fs');
// Store path of data files
const dataPath = __dirname + '/../data/data.json'

function get(){
    return JSON.parse(fs.readFileSync(dataPath));
}

const productModel = {
    get

}

module.exports = productModel