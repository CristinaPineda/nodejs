const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/dashboards', (req, res) => {
  res.render('dashboards')
})

app.get('/',(_req, res) => {

  const user = {
    name: 'Cristina',
    course: 'Nodejs',
  }

  const uso = 'Testes com template engine'

  const auth = false;

  res.render('home', { user: user, uso, auth })
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta: 3000' )
});
