const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  const filename = q.pathname.substring(1) // a partir do um pega após a '/'

  if (filename.includes('html')) {
    if(fs.existsSync(filename)) {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      })
    } else {
      //404
    }
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});