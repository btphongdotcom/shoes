
class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home')
    }
    // [GET] /account
    account(req, res) {
        res.render('account')
    }
    cart(req, res){
        res.render('cart')
    }
}

module.exports = new SiteController;

