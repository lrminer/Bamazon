const db = require('../models');
const items = [
  {
    product_name: 'Product One',
    department_name: 'Department One',
    price: 9.95,
    stock_quantity: 100
  },
  {
    product_name: 'Product Two',
    department_name: 'Department Two',
    price: 9.99,
    stock_quantity: 125
  }
];
db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items)
    .then(function(rows) {
      console.log(`\n${rows.length} Rows Inserted`);
    })
    .catch(function(err) {
      console.log('\nError:', err);
    });
});