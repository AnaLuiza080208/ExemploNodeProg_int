const fs = require('fs');
const { obterInfoSistema } = require('./teste');

fs.appendFile('log.txt', 'Nova Entrada de log\n', (err) => {
  if (err) throw err;
  console.log('Entrada Salva!');
});

const info = obterInfoSistema();
console.log(info);
