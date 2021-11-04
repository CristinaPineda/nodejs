const express = require('express');
const cutes = require('./routes');

const app = express();
const port = 5000;

const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(express.static('public'));
app.use('/cute', cutes)

app.get('/', (_req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.use((_req, res, _next) => {
  res.sendFile(`${basePath}/404.html`)
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
});