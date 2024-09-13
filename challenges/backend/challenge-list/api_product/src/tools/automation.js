const
    fs = require('fs'),
    path = require('path'),
    { v4: uuidv4 } = require('uuid');

// Store path of data files
const backupDataPath = __dirname + '/../data/data.bak'
const dataPath = __dirname + '/../data/data.json'

function setData(){
    let data
    
    // 1) Read the backup file
    try {
        data = JSON.parse(fs.readFileSync(backupDataPath));
        
    } catch (error) { console.log(error) }

    // 2) Get theme uniq id
    for (let i = 0; i < data.length; i++) {
        data[i].id = uuidv4()
        
    }

    // 3) Write in target file
    try {
        const result = fs.writeFileSync(dataPath, JSON.stringify(data))

    } catch (error) { console.log(error) }

}
const automation = {
    setData

}

module.exports = automation