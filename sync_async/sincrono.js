const fs = require('fs');

console.log('Inicio'); // executa essa linha;

fs.writeFileSync('arquivo.txt', 'Arquivo criado de forma sincrona com a execução do programa.'); // cria esse arquivo;

console.log('Fim'); // executa essa linha após criar o arquivo.
