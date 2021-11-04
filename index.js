const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/dashboards', (req, res) => {

  const itens = ["ação 1", "ação 2", "ação 3", "ação 4"]

  res.render('dashboards', {itens})
})

app.get('/',(_req, res) => {

  const user = {
    name: 'Cristina',
    course: 'Nodejs',
  }

  const uso = 'Testes com template engine'

  const auth = true;
  const approved = false;

  res.render('home', { user: user, uso, auth, approved })
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta: 3000' )
});
