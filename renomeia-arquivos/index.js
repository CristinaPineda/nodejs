const fs = require("fs");

fs.rename("arquivo.txt", "novoArquivo.txt", (err) => {
  //nome do arquivo antigo - nome do arquivo novo
  if (err) {
    console.log(err);
    return
  }
  console.log("Arquivo renomeado!");
});
