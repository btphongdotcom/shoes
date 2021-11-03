const Product = require('../modes/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class ProductController {
    //[GET] /products
    index(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('products', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
        // res.render('products')
    }
    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                res.render('products/show', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }
}

module.exports = new ProductController();
