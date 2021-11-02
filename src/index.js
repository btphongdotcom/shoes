const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

//connect db
db.connect();

const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(morgan('combined'))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourses','views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})