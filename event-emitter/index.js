const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('Durante');
});

console.log('Antes'); // 01. lê essa linha e imprime primeiro

eventEmitter.emit('start'); // 02. dá o comando que a linha 4 está esperando e executa a função anonima que estava esperando o "start"

console.log('Depois'); // 03. lê e imprime essa linha após tudo.
