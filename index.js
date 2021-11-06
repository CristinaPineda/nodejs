const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({partialsDir: "/views/partials"}) // configura o caminho dos partials (componentes haha)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboards', (req, res) => {

  const itens = ["ação 1", "ação 2", "ação 3", "ação 4"]

  res.render('dashboards', {itens})
})

app.get('/post', (req, res) => {
  const posts = {
    title: 'Aprendendo Nodejs',
    subtitle: 'Template engine com Handlebars',
    body: 'Bora aprender!!!!',
  }
  res.render('blogpost', { posts })
})

app.get('blog', (req, res) => {
  const post = [{
    title: 'Aprendendo Nodejs',
    subtitle: 'Template engine com Handlebars',
    body: 'Bora aprender!!!!',
  },
  {
    title: 'Aprendendo Reactjs',
    category: 'JavaScript',
    body: 'Bora aprender!!!!',
  },
  {
    title: 'Aprendendo Python',
    category: 'Python',
    body: 'Bora aprender!!!!',
  },
  {
    title: 'Aprendendo Express',
    category: 'Node',
    body: 'Bora aprender!!!!',
  }]
  res.render('blog', { post })
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
