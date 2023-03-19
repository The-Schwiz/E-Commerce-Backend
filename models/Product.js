const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Set up Product model to extend the Model class
class Product extends Model { }

// set up product model 
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;