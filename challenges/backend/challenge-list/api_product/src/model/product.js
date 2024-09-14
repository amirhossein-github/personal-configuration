const
    fs = require('fs'),
    { v4: uuidv4 } = require('uuid');

// Store path of data files
const dataPath = __dirname + '/../data/data.json'

function get(){
    return JSON.parse(fs.readFileSync(dataPath));
}

function create(data){
    // Ignore to validate data carefully
    if ( data["author"] && data["country"] && data["imageLink"] && data["language"] && data["link"] && data["pages"] && data["title"] && data["year"] ){

        // 1) Get it ID
        data["id"] = uuidv4()

        // 2) Read all data
        let allData = JSON.parse(fs.readFileSync(dataPath));

        // 3) Add new data to all data
        allData.push(data)

        // 4) Save all data
        fs.writeFileSync(dataPath, JSON.stringify(allData))
        return true

    } else {
        return false

    }
}

const productModel = {
    get,
    create

}

module.exports = productModel