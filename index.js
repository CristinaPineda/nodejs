// chama express após a instalação
const express = require('express');

const app = express();
const port = 3000;

const path = require('path');

const basePath = path.join(__dirname, 'templates') // direciona o path para a pasta que vou usar com renderizações

const checkAuth = function(req, res, next) {

  req.authStatus = true;

  if(req.authStatus) {
    console.log('Login realizado, pode continuar');
    next();  // vá para o próximo passo, senão fica num loading infinito
  } else {
    console.log('Faça o login para continuar')
    next();
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {

  // res.sendFile(path.join(basePath, 'index.html')); //lê arquivo do template
  res.sendFile(`${basePath}/index.html`); // outra opção para ler o arquivo do templates

})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}` )
})