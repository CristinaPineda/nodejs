const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);

// inserir argumentos: node index.js --nome=Isabel 

const nome = args['nome'];
console.log(nome);

// inserir argumentos: node index.js --nome=Isabel --profissao=Bailarina
const profissao = args['profissao'];
console.log(profissao);

console.log(`Seu nome é ${nome} e sua profissão é ${profissao}.`);
