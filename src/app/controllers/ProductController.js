
class ProductController {

    //[GET] /products
    index(req, res) {
        res.render('products')
    }
    // [GET] /products/:slug
    show(req, res){
        res.send('PRODUCT DETAIL')
    }
}

module.exports = new ProductController;

