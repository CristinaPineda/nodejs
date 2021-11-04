// chama express após a instalação
const express = require('express');
const users = require('./users'); //rotas do usuario

const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates')
const checkAuth = require('./middlewares');

app.use(checkAuth);
app.use(express.urlencoded({ extended: true })); // usados para ler o corpo da reuqisição
app.use(express.json()); // esse tbm

app.use(express.static('public'));
app.use('/users', users)

app.get('/', (_req, res) => {
  // res.sendFile(path.join(basePath, 'index.html')); //lê arquivo do template
  res.sendFile(`${basePath}/index.html`); // outra opção para ler o arquivo do templates
})

// 404 é criado abaixo de tudo pois oq que não passar cai aqui
app.use((req, res, next) => {
  res.sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
})