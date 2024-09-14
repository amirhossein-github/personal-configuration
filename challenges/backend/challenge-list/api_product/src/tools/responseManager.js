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

function code_405(req, res){
    res.writeHead(405, content_type.json);
    res.end(JSON.stringify({data: "405, Method Not Allowed"}))
    
}

function code_500(req, res, document){
    res.writeHead(404, content_type.json);
    res.end(JSON.stringify({data: "500, Internal Server Error", error: document}))
    
}

function validOptions(req, res, methods){
    res.writeHead(200, content_type.json);
    res.end(JSON.stringify({data: "list of valid options", options: methods}))
}
const responsesManager = {
    code_200,
    code_404,
    code_405,
    code_500,
    validOptions

}

module.exports = responsesManager