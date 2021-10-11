const fs = require('fs'); // file system (arquivos de texto)

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

  if(err){
    console.log(err)
    return
  }
  console.log(data)

});
