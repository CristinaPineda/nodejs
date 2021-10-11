// nome

console.log(process.argv);
// executar no terminal node index.js nome=Cristina

const args = process.argv.slice(2);
console.log(args);

const nome = args[0].split('=')[1];
console.log(nome);

// executar no terminal node index.js nome=Cristina idade=24
const idade = args[1].split('=')[1];
console.log(idade);

console.log(`Meu nome é ${nome} eu tenho ${idade} anos de idade.`);
