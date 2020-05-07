getIndex = function(req, res, next) {
    res.render('index', { title: 'RESTful Routing' });
}
getExample = function(req, res) {
    res.render('example', { title: "Example HTTP Requests" })
}
getReqExample = function(req, res) {
    res.json({ message: "User made a GET request" })
}
postReqExample = function(req, res) {
    res.json({ message: "User made a POST request" })
}
putReqExample = function(req, res) {
    res.json({ message: "User made a PUT request" })
}
deleteReqExample = function(req, res) {
    res.json({ message: "User made a DELETE request" })
}

getRestful = function(req, res) {
    res.render('restful', { title: "RESTful Routing Architecture" })
}

getStatusCodes = function(req, res) {
    res.render('status-codes', { title: "HTTP Status COde" })
}




module.exports = {
    getIndex,
    getExample,
    getReqExample,
    putReqExample,
    postReqExample,
    deleteReqExample,
    getRestful,
    getStatusCodes
}