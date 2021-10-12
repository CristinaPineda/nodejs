const inquirer = require('inquirer');

// estrutura: metodo prompt([dentro array para fazer varias perguntas])
// prompt([{ para cada pergunta um objeto}; {}])
// prompt([{
//   name: nome da pergunta,
//   message: qual é a pergunta
// }]);

inquirer.prompt([
  {
    name: 'Prova_Matemática',
    message: 'Qual a nota da prova de matemática?',
  }, 
  {
    name: 'Prova_Português',
    message: 'Qual a nota da prova de português?',
  },
])
  .then((answers) => {
  console.table(answers);
  const media = (parseInt(answers.Prova_Matemática) + parseInt(answers.Prova_Português)) / 2;
  console.log(`A média das notas é: ${media}.`);
})
  .catch(err => { console.error(err);});
