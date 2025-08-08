const fs = require('fs');
const path = require('path');

function lerJson(nomeArquivo) {
  const caminho = path.join(__dirname, nomeArquivo);
  return JSON.parse(fs.readFileSync(caminho, 'utf8'));
}

const id = lerJson('id.json');
const nome = lerJson('nome.json');
const idade = lerJson('idade.json');
const profissao = lerJson('profissao.json');

const dadosCompletos = id.map((_, i) => ({
  id: id[i],
  nome: nome[i],
  idade: idade[i],
  profissao: profissao[i],
}));

module.exports = dadosCompletos;
