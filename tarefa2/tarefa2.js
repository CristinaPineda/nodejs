const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome_usuario",
      message: "Qual é o seu nome?",
    },
    {
      name: "idade_usuario",
      message: "Qual é a sua idade?",
    },
  ])
  .then((answers) => {
    console.table(answers);
    const phrase = `Usuário ${answers.nome_usuario} com idade de ${answers.idade_usuario} anos, registrado com sucesso!`;
    console.log(chalk.bgYellow.black(phrase));
  })
  .catch((err) => {
    console.error(err);
  });
