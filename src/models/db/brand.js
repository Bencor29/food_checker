const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

class Brand extends Model {}
Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'brands',
    timestamps: false,
});

module.exports = Brand;
