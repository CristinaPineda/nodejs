const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question('Qual sua linguagem preferida?', (lang) => {
//   console.log(`A linguagem preferida é: ${lang}`);
//   readline.close(); //
// });


readline.question('Qual sua linguagem de programação preferida? ', (language) => {
  if (language.toLowerCase() === 'python') {
    console.log('Também adoro Python!!')
  } else {
    console.log(`A linguagem escolhida como preferida foi: ${language}`);
  };
  readline.close();
});
