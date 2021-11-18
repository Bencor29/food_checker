const axios = require('axios');
const url = require('../../config').api;

const fields = {
    id: 'code',
    quantity: 'quantity',
    product_name: 'libelle',
    additives_tags: '_additives',
    allergens_hierarchy: '_allergens',
    brands: '_brands',
    conservation_conditions: 'conservation',
};

/**
 *
 * @param product {{
 *      ingredients: [{text: string}]
 * }}
 */
function getIngredients(product) {
    let ingredients = [];

    for (let i = 0; i < product.ingredients.length; i++) {
        ingredients.push(product.ingredients[i].text);
    }

    return ingredients;
}

/**
 *
 * @param ean {string}
 */
async function get(ean) {
    const data = await axios.get(url + ean);
    if (data.status !== 200)
        throw new Error(`Got status ${data.status} from API with response: ${data.data}`);

    /**
     *
     * @type {{
     *     ingredients: [],
     *     nutriments: {},
     *     nutriscore_grade: string,
     * }}
     */
    let rawProduct = data.data.product;
    let product = {};

    for (const key in fields) {
        product[fields[key]] = rawProduct[key] || null;
    }

    product._ingredients = getIngredients(rawProduct);
    product.energy_100g = rawProduct.nutriments.energy_100g;
    product.energy_unit = rawProduct.nutriments.energy_unit;
    product.fat_100g = rawProduct.nutriments.fat_100g;
    product.fat_unit = rawProduct.nutriments.fat_unit;
    product.fiber_100g = rawProduct.nutriments.fiber_100g;
    product.fiber_unit = rawProduct.nutriments.fiber_unit;
    product.nutriscore_grade = rawProduct.nutriscore_grade;

    return product;
}

module.exports = {
    get,
};
