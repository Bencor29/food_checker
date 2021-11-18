const Additive = require('./additive');
const Allergen = require('./allergen');
const Brand = require('./brand');
const Ingredient = require('./ingredient');
const Product = require('./product');

const AdditivesProducts = require('./additives_products');
const AllergensIngredients = require('./allergens_ingredients');
const IngredientsProducts = require('./ingredients_products');

Brand.hasMany(Product, {
    foreignKey: 'brands_id',
});
Product.belongsTo(Brand, {
    foreignKey: 'brands_id',
});

Product.belongsToMany(Additive, {
    through: AdditivesProducts,
    timestamps: false,
});
Additive.belongsToMany(Product, {
    through: AdditivesProducts,
    timestamps: false,
});

Allergen.belongsToMany(Ingredient, {
    through: AllergensIngredients,
    timestamps: false,
});
Ingredient.belongsToMany(Allergen, {
    through: AllergensIngredients,
    timestamps: false,
});

Product.belongsToMany(Ingredient, {
    through: IngredientsProducts,
    timestamps: false,
});
Ingredient.belongsToMany(Product, {
    through: IngredientsProducts,
    timestamps: false,
});
