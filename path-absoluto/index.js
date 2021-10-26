const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt'))

//formando path
const pasta = 'projetos';
const nomeProjeto = 'nodeProject.txt';

const filePath = path.join('/', 'portifolio', pasta, nomeProjeto);

console.log(filePath);