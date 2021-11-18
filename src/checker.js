const Brand = require('./models/db/brand');
const api = require('./models/off/product');

const fields = [
    'code',
    'quantity',
    'libelle',
    'conservation',
    'energy_100g',
    'energy_unit',
    'fat_100g',
    'fat_unit',
    'fiber_100g',
    'fiber_unit',
    'nutriscore_grade',
];

/**
 *
 * @param product {Product}
 * @param apiProduct {{_brands: string}}
 * @return Promise<{{key: string, value: string}}|false>
 */
async function checkBrand(product, apiProduct) {
    const apiBrand = apiProduct._brands.split(',')[0];
    let brand = await product.getBrand()
    if (brand.name !== apiBrand) {
        let newBrand = await Brand.findOne({
            where: {
                name: apiBrand,
            },
        });
        if (!newBrand) {
            newBrand = Brand.build({
                name: apiBrand,
            });
            await newBrand.save();
        }
        product.setBrand(newBrand);

        return {
            key: 'brand',
            value: `"${brand.name}" => "${apiBrand}"`,
        };
    }

    return false;
}

module.exports = async product => {
    try {
        const apiProduct = await api.get(product.code);
        let updated = [];

        for (const i in fields) {
            const key = fields[i];
            if (product[key] !== apiProduct[key] && apiProduct[key] !== undefined) {
                updated.push({
                    key: key,
                    value: `"${product[key]}" => "${apiProduct[key]}"`,
                });
                product[key] = apiProduct[key];
            }
        }

        const brand = await checkBrand(product, apiProduct);
        if (brand) {
            updated.push(brand);
        }

        if (updated.length > 0) {
            await product.save();
            console.log(`Product ${product.code} updated:`);
            for (const i in updated) {
                const key = updated[i].key;
                const value = updated[i].value;
                console.log(`${key}: ${value}`);
            }
        } else {
            console.log(`Product ${product.code} is up to date`);
        }
    } catch (e) {
        console.log(e);
    }
}