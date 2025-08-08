
const express = require('express');
const dados = require('../data/sample.data');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(dados);
});

module.exports = router;