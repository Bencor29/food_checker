const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

class Ingredient extends Model {}
Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    percent: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'ingredients',
    timestamps: false,
});

module.exports = Ingredient;
