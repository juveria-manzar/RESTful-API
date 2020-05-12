
getIndex = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}





module.exports = {
    getIndex
}
