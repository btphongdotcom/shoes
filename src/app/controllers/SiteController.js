
class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home')
    }
    // [GET] /account
    register(req, res) {
        res.render('register')
    }
    admin(req, res) {
        res.render('admin')
    }
    customer(req, res) {
        res.render('customer')
    }
    cart(req, res){
        res.render('cart')
    }
}

module.exports = new SiteController;

