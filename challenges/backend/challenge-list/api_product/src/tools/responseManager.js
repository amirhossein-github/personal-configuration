const content_type = {
    json: {'Content-Type': 'application/json'}
}

function code_200(req, res, document){
    res.writeHead(200, content_type.json)
    try { res.write(document) } catch (e) { res.write(JSON.stringify(document)) }
    res.end()
}

function code_404(req, res){
    res.writeHead(404, content_type.json);
    res.end(JSON.stringify({data: "404, Not Found"}))
    
}

function code_500(req, res, document){
    res.writeHead(404, content_type.json);
    res.end(JSON.stringify({data: "500, Internal Server Error", error: document}))
    
}

const responsesManager = {
    code_200,
    code_404,
    code_500

}

module.exports = responsesManager