const sequelize = require('./config').db;
const Ingredient = require('./models/db/ingredient');
require('./models/db/__relations');

(async () => {
    await sequelize.sync();

})();
