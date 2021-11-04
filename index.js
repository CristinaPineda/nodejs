// chama express após a instalação
const express = require('express');

const app = express();
const port = 3000;

const path = require('path');

const basePath = path.join(__dirname, 'templates') // direciona o path para a pasta que vou usar com renderizações

const checkAuth = require('./middlewares');

app.use(checkAuth);
app.use(express.urlencoded({ extended: true })); // usados para ler o corpo da reuqisição
app.use(express.json()); // esse tbm

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/formAdd.html`);
})

app.post('/users/save', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`Nome: ${name}, idade: ${age}`);
  res.sendFile(`${basePath}/formAdd.html`) //retorna o form
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  console.log(`Buscando usuario: ${id}`)
  res.sendFile(`${basePath}/users.html`);
})


app.get('/', (_req, res) => {

  // res.sendFile(path.join(basePath, 'index.html')); //lê arquivo do template
  res.sendFile(`${basePath}/index.html`); // outra opção para ler o arquivo do templates

})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
})