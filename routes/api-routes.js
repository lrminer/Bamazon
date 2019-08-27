// Dependencies
const db = require('../models');

// Routes as exports
module.exports = function (app) {
    app.get('/api/products', function (req, res) {
        db.Product.findAll({}).then(function (dbProducts) {
            res.json(dbProducts);
        });
    });

    app.post('/api/products/', function (req, res) {
        console.log(req);
        db.Product.create(
            req.body
        ).then(function(result){
            res.json(result);
        });
    });
    // app.delete();

};