class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home');
    }
    // [GET] /account
    register(req, res) {
        res.render('account/register');
    }
    admin(req, res) {
        res.render('account/admin');
    }
    customer(req, res) {
        res.render('account/customer');
    }
    cart(req, res) {
        res.render('cart');
    }
}

module.exports = new SiteController();
