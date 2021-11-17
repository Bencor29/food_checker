const sequelize = require('./config').db;
const Ingredient = require('./models/ingredient');
require('./models/__relations');

(async () => {
    await sequelize.sync();
    Ingredient.findAll().then(ingredients => {
        ingredients.every(ingredient => {
            console.log('');
            console.log('Ingredient: ' + ingredient.name);
            console.log('Allergenes:');
            ingredient.getAllergens().then(allergens => {
                for (let i = 0; i < allergens.length; i++) {
                    console.log(' - ' + allergens[i].name);
                }
            })
        })
    })
})();
