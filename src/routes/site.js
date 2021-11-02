const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.use('/cart', siteController.cart)
router.use('/account', siteController.account)
// siteController.index
router.use('/', siteController.index)

module.exports = router