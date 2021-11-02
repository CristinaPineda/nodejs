// chama express após a instalação
const express = require('express');

const app = express();
const port = 3000;

const path = require('path');

const basePath = path.join(__dirname, 'templates') // direciona o path para a pasta que vou usar com renderizações


app.get('/', (req, res) => {

  res.send('ola mundo')

})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
})