const Allergen = require('./allergen');
const AllergensIngredients = require('./allergens_ingredients')
const Brand = require('./brand');
const Ingredient = require('./ingredient');
const Product = require('./product');

Brand.hasMany(Product, {
    foreignKey: 'brands_id',
});
Product.belongsTo(Brand, {
    foreignKey: 'brands_id',
});


Allergen.belongsToMany(Ingredient, {
    through: AllergensIngredients,
    timestamps: false,
});
Ingredient.belongsToMany(Allergen, {
    through: AllergensIngredients,
    timestamps: false,
});