const fs = require('fs');
const path = './logs.txt';

function registrarLog(mensagem, nivel) {
  const log = [${new Date().toISOString()}] [${nivel}] ${mensagem}\n;
  fs.appendFileSync(path, log);
}

function limparLogs() {
  fs.writeFileSync(path, '');
}

module.exports = { registrarLog, limparLogs };
