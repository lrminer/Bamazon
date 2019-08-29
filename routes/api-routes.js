// Dependencies
const db = require('../models');

// Routes as exports
module.exports = function (app) {
    app.get('/api/products', function (req, res) {
        db.Product.findAll({}).then(function (dbProducts) {
            res.json(dbProducts);
        });
    });

    app.get('/api/products/department/:department', function (req, res) {
        db.Product.findAll({
            where: {
                department_name: req.params.department
            }
        }).then(function (dbProducts) {
            res.json(dbProducts);
        });
    });

    app.post('/api/products/', function (req, res) {
        console.log(req);
        db.Product.create(
            req.body
        ).then(function (result) {
            res.json(result);
        });
    });

    app.put('/api/products/id/:id', function (req, res) {
        console.log(req.body);

        if (req.body.stock_quantity > req.body.amount) {
            db.Product.update({
                stock_quantity: (req.body.stock_quantity-req.body.amount)
            }, {
                where: {
                    id: req.body.id
                }
            }).then(function(result){
                res.json(result);
            });
        } else {
            res.json( {message: "Insufficient Quantity!"});
        }

    });
    

};