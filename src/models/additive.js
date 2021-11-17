const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config').db;

class Additive extends Model {}
Additive.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'additives',
    timestamps: false,
});

module.exports = Additive;
