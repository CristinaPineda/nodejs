const fs = require('fs');

console.log('Inicio');

fs.writeFile('arquivoAsync.txt', 'Arquivo criado de forma assincrona no programa', (err) => {
  setTimeout(() => {
    console.log('Arquivo criado')
  }, 2000)
});

console.log('Fim');
