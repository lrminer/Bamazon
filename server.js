// Server.js 
// Dependencies
const express = require('express');
const db = require('./models');


// Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static directory
app.use(express.static('./public'));

// Routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


// Testing items

const items = [{
        product_name: 'Product One',
        department_name: 'Department One',
        price: 9.95,
        stock_quantity: 100,
        image_url: "http://via.placeholder.com/200"
    },
    {
        product_name: 'Product Two',
        department_name: 'Department Two',
        price: 9.99,
        stock_quantity: 125,
        image_url: "http://via.placeholder.com/200"

    }
];

// Syncing and then starting the express app
db.sequelize.sync({
        force: true
    })
    .then(function () {
        db.Product.bulkCreate(items)
            .then(function (rows) {
                console.log(`\n${rows.length} Rows Inserted`);
            })
            .catch(function (err) {
                console.log('\nError:', err);
            });
    })

    .then(function () {
        app.listen(PORT, function () {
            console.log('App listening on PORT ' + PORT + '\nhttp://localhost:' + PORT);
        });
    });