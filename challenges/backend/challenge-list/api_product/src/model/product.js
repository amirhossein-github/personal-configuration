const
    fs = require('fs'),
    { v4: uuidv4 } = require('uuid');

// Store path of data files
const dataPath = __dirname + '/../data/data.json'

function get(id){

    if (id === undefined){
        return JSON.parse(fs.readFileSync(dataPath));

    } else {
        const allData = JSON.parse(fs.readFileSync(dataPath));
        return allData.filter((index) => index.id === id)
    }
}

function create(data, id){
    if (id === undefined) {
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

    } else {
        // 1) Read all data
        let allData = JSON.parse(fs.readFileSync(dataPath));

        // 2) Find index
        let counterIndex = 0
        let oldData;
        for (let i = 0; i < allData.length; i++) {
            const element = allData[i];
            if (element.id === id){
                oldData = allData[i]
                break
            } else {
                ++counterIndex
            }
            
        }

        // 3) Save old id and update all data
        const oldID = allData[counterIndex].id
        allData[counterIndex] = data
        allData[counterIndex].id = oldID

        // 4) Save data
        fs.writeFileSync(dataPath, JSON.stringify(allData))
    }
    
}

function remove(productID){

    // 1) Get all data
    const data = get()

    // 2) Find the position
    const elementPos = data.map(function(x) {return x.id; }).indexOf(productID);
    if (elementPos === -1){

        //1
        // return done(Error({manualError: 'Error: ID not found'}))

        // 2
        throw new Error('Error: ID not found')

    }

    // 3) Delete the element
    data.splice(elementPos, 1)
    
    // 4) Save all data
    fs.writeFileSync(dataPath, JSON.stringify(data))
}

const productModel = {
    get,
    create,
    remove

}

module.exports = productModel