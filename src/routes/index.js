const productRouter = require('./product')
const siteRouter = require('./site')
function route(app){
      //product
      app.use('/products', productRouter)

      app.use('/', siteRouter)
}

module.exports = route;