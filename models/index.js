// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  foreignKey: 'tag_id'
  });

module.exports = {
  Product,
  Tag,
  ProductTag,
  Category,
};
