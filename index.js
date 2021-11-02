// chama express após a instalação
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.send('ola mundo')

})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
})