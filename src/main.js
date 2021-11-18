const sequelize = require('./config').db;
const Brand = require('./models/db/brand');
require('./models/db/__relations');

(async () => {
    await sequelize.sync();
    Brand.findAll().then(brands => {
        console.log('Brands:');
        brands.forEach(brand =>  {
            console.log(' - ' + brand.name);
        });

        sequelize.close();
    })
})();
