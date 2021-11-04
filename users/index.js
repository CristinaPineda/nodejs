const express = require("express");
const router = express.Router();

const path = require("path");
const basePath = path.join(__dirname, "../templates"); // direciona o path para a pasta que vou usar com renderizações

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/formAdd.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`Nome: ${name}, idade: ${age}`);
  res.sendFile(`${basePath}/formAdd.html`); //retorna o form
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Buscando usuario: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
