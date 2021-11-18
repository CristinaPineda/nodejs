const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public/index.html'));

app.get('/', (req, res) => {
  res.render('home')
})

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '130913',
  database: 'nodemysql',
})

connect.connect((err) => {
  if(err) {
    console.error(err);
  }

  console.log('MySql Conectado')

  app.listen(3000)
})