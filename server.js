const express = require('express');
const users = require('./users');

const app = express();
const port = 5000;

const path = require('path');
const basePath = path.join(__dirname, 'templates');


app.get('/', (_req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res, next) => {
  res.sendFile(`${basePath}/404.html`)
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
});