const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.get('/cart', siteController.cart)
router.get('/register', siteController.register)
router.get('/admin', siteController.admin)
router.get('/customer', siteController.customer)
// siteController.index
router.get('/', siteController.index)

module.exports = router