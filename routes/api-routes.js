// Dependencies
const db = require('../models');

// Routes as exports
module.exports = function (app) {
    app.get('api/products/all', function(req,res) {
        db.Product.findAll({}).then(function(dbProducts){
            res.json(dbProducts);
        });
    });
    // app.post();
    // app.delete();
    
};