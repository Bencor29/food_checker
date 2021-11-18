const { Op } = require("sequelize");
const sequelize = require('./config').db;
const Product = require('./models/db/product');
const checkProduct = require('./checker');
const Pool = require('./pool');
require('./models/db/__relations');


const date2h = new Date();
const date3h = new Date();
date2h.setHours(date2h.getHours() - 6);
date3h.setHours(date3h.getHours() - 7);


(async () => {
    await sequelize.sync();
    Product.findAll({
        where: {
            [Op.or]: [
                {
                    createdAt: {
                        [Op.gt]: date3h,
                        [Op.lte]: date2h,
                    }
                },
                {
                    updatedAt: {
                        [Op.gt]: date3h,
                        [Op.lte]: date2h,
                    }
                },
            ],
        },
    }).then(async products => {
        products.forEach(product => {
            Pool.add(checkProduct(product));
        });

        await Pool.resolve();

        await sequelize.close();
    });
})();
