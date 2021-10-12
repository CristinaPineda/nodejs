function a() {
  console.log('Executando a()');
}

function b() {
  console.log('Executando b()');
}

function c() {
  console.log('Executando c()');
  a();
  b();
}

c();

// garante que a execução do código seja sequencial
// padrao de arquitetura node (modo que o node lê o codigo)
