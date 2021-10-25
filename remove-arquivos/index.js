const fs = require("fs");

fs.unlink("arquivo.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquivo removido!");
});

// é necessário ter um arquivo (nesse caso) chamado arquivo.txt para que jhaja a remoção do arquivo
