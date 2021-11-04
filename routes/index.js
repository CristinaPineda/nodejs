const express = require("express");
const router = express.Router();

const path = require("path");
const basePath = path.join(__dirname, "../templates");

router.use('/cats', (_req, res) => {
  res.sendFile(`${basePath}/cats.html`)
});

router.use('/dogs', (_req, res) => {
  res.sendFile(`${basePath}/dogs.html`)
});

module.exports = router;