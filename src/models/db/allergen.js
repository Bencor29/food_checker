const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

class Allergen extends Model {}
Allergen.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'allergens',
    timestamps: false,
});

module.exports = Allergen;
