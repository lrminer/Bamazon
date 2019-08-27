// Dependencies
const path = require('path');

module.exports = function (app) {
    // index route loads index.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/sell', function(){
        res.sendFile(path.join(__dirname, "../public/sell.html"))
    })
    
};