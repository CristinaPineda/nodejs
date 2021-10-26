const fs = require('fs');

if(!fs.existsSync('./minhapasta')) {
  console.log('Não existe pasta indicada')
  fs.mkdirSync('minhapasta')
} else if (fs.existsSync('./minhapasta')) {
  console.log('Existe pasta indicada')
}
