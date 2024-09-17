function findObjectByID(array, id){

    // 1) Do forLoop in array
    for (let i = 0; i < array.length; i++) {

        // 2) If find id: return object
        if (array[i].id === id){
            return array[i]

        }
    }

    // 3) If not found return ''
    return ''
}

function dataStructureChecking(data){
    /**
     * {
     *      "name": "",
     *      "link": "",
     *      "tags": [],
     *      "duration": {"hour": , "minute": , "second": },
     *      "date": {"year": 24, "month": 6, "day": },
     *      "isPassed": false
     *  }
     */

    // 1) Checking datatype
    if (
        // name, link: string
        typeof data["name"] === 'string' &&
        typeof data["link"] === 'string' &&
        // tags: array
        Array.isArray(data["tags"]) &&
        // duration, date: object
        typeof data["duration"] === 'object' && !Array.isArray(data["duration"]) && data["duration"] !== null &&
        typeof data["date"]     === 'object' && !Array.isArray(data["date"])     && data["date"]     !== null &&
        // isPassed: boolean
        typeof data["isPassed"] === 'boolean'
    ){
        console.log('ok------------------------------\n', data)
        return true
       
    } else {
        console.log(data, typeof data.isPassed)
        return false
    }
}

const productModel = {
    findObjectByID,
    dataStructureChecking

}

module.exports = productModel