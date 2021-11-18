const { Sequelize } = require('sequelize');

const db = new Sequelize('mariadb://boc:BOCpwd123@node02.horizon-network.net:25002/boc', {
    logging: false,
});

module.exports = {
    db,
    api: 'https://fr.openfoodfacts.org/api/v0/product/',
};