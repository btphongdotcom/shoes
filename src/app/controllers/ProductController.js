const Product = require('../modes/Product')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class ProductController {
    //[GET] /products
    index(req, res, next) {
        
        Product.find({})
            .then(products => res.render('products', {
                products: mutipleMongooseToObject(products)
            }))
            .catch(next)
        // res.render('products')
    }
    // [GET] /products/:slug
    show(req, res){
        res.send('PRODUCT DETAIL')
    }
}

module.exports = new ProductController;

