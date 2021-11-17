const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config').db;

class Additive extends Model {}
Additive.init({
    ingredientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    allergenId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'ingredients_has_allergens',
    timestamps: false,
});

module.exports = Additive;
