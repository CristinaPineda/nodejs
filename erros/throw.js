const x = "10"; // entra no throw
// const x = 10; //  não entra no throw

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro");
}
