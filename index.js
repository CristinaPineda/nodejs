const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/',(req, res) => {

  const user = {
    name: 'Cristina',
    course: 'Nodejs',
  }

  const uso = 'Testes com template engine'

  res.render('home', { user: user, uso })
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta: 3000' )
})
