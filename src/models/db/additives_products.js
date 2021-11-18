const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

class AdditivesProducts extends Model {}
AdditivesProducts.init({
    additiveId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'products_has_additives',
    timestamps: false,
});

module.exports = AdditivesProducts;
