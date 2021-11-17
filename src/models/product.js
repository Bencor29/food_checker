const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config').db;

class Product extends Model {}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    brands_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    quantity: DataTypes.STRING,
    energy_100g: DataTypes.FLOAT,
    energy_unit: DataTypes.STRING,
    fat_100g: DataTypes.FLOAT,
    fat_unit: DataTypes.STRING,
    fiber_100g: DataTypes.FLOAT,
    fiber_unit: DataTypes.STRING,
    nutriscore_grade: DataTypes.FLOAT,
}, {
    sequelize,
    modelName: 'products',
    timestamps: false,
});

module.exports = Product;
