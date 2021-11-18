const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config').db;

/**
 * Product model.
 * @extends Model
 * @property id {int}
 * @property brands_id {int}
 * @property code {string}
 * @property libelle {string}
 * @property quantity {string}
 * @property conservation {string}
 * @property energy_100g {float}
 * @property energy_unit {string}
 * @property fat_100g {float}
 * @property fat_unit {string}
 * @property fiber_100g {float}
 * @property fiber_unit {string}
 * @property nutriscore_grade {string}
 * @property createdAt {date}
 * @property updatedAt {date}
 * @property locked {boolean}
 */
class Product extends Model {}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brands_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    conservation: DataTypes.STRING,
    quantity: DataTypes.STRING,
    energy_100g: DataTypes.FLOAT,
    energy_unit: DataTypes.STRING,
    fat_100g: DataTypes.FLOAT,
    fat_unit: DataTypes.STRING,
    fiber_100g: DataTypes.FLOAT,
    fiber_unit: DataTypes.STRING,
    nutriscore_grade: DataTypes.FLOAT,
    locked: DataTypes.BOOLEAN,
}, {
    sequelize,
    modelName: 'products',
});

module.exports = Product;
