// const _ = require('lodash');

// const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8];
// const array2 = [ 1, 3, 5, 11, 4, 7, 9, 0];

// const diffArray = _.difference(array1, array2);
// console.log(diffArray);

// //execute com node index.js na pasta raiz do projeto

const _ = require('lodash');
const chalk = require('chalk');

const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [ 1, 3, 5, 11, 4, 7, 9, 0];

const diffArray = _.difference(array1, array2);
console.log(chalk.yellow.bold(diffArray));

//execute com node index.js na pasta raiz do projeto

//npm update <nome> para atualização de pacotes
// npx npm-check-updates -u
// para instalar de forma global usar a flag -g ex: npm install <pacote> -g
// para remover pacotes: npm uninstall <nome pacote> 
