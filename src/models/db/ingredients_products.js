const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

class IngredientsProducts extends Model {}
IngredientsProducts.init({
    ingredientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'ingredients_has_products',
    timestamps: false,
});

module.exports = IngredientsProducts;
