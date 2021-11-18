require("dotenv").config();
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const MYSQLPASS = process.env.MYSQLPASS;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json());

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title
  const page = req.body.page

  const querysql = `INSERT INTO books (title, page) VALUES ('${title}', '${page}')`

  connect.query(querysql, (err) => {
    if(err) {
      console.error(err);
    }

    res.redirect('/')
  })
})

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQLPASS,
  database: 'nodemysql',
})

connect.connect((err) => {
  if(err) {
    console.error(err);
  }

  console.log('MySql Conectado')

  app.listen(3000)
})