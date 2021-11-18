const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public/index.html'));

app.get('/', (req, res) => {
  res.render('home')
})

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

connect.connect((err) => {
  if(err) {
    console.error(err);
  }

  console.log('MySql Conectado')

  app.listen(3000)
})