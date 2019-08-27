'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    // associations can be defined here

  };
  return Product;
};