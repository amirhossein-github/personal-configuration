const fs = require('fs');

let data = {
    project: {
        path: __dirname + '/..'

    },

    database: {
        path: __dirname + '/data.json'

    }
}

const static = {
    data
}

module.exports = static

// function change(req, res){
//     const [,,,id] = req.url.split('/')

//     } else {
//         let fullData = ''
//         try {
//             // GET DATA
//             req.on('data', function (chunk) {
//                 fullData += chunk;
//             });
            
//             req.on('end', function () {

//                 // if data is empty
//                 if (fullData === ''){
//                     return responsesManager.code_200(req, res, {data: 'You have not sent any data'})

//                 }

//                 // if json can pars it as json
//                 try {
//                     JSON.parse(fullData);

//                 } catch (e) {
//                     return responsesManager.code_200(req, res, {data: 'The data structure you sent is not of type json'})

//                 }

//                 const creation = productModel.create(JSON.parse(fullData)[0], id)
//                 creation ?
//                 responsesManager.code_200(req, res, {data: 'Your product has been added to the product list'}):
//                 responsesManager.code_200(req, res, {data: 'Product data is not valid'})
//             });

//         } catch (error) { responsesManager.code_500(req, res, error) }










// function create(data, id){
// if (id === undefined) {
//     // Ignore to validate data carefully
//     if ( data["author"] && data["country"] && data["imageLink"] && data["language"] && data["link"] && data["pages"] && data["title"] && data["year"] ){

//         // 1) Get it ID
//         data["id"] = uuidv4()

//         // 2) Read all data
//         let allData = JSON.parse(fs.readFileSync(dataPath));

//         // 3) Add new data to all data
//         allData.push(data)

//         // 4) Save all data
//         fs.writeFileSync(dataPath, JSON.stringify(allData))
//         return true
