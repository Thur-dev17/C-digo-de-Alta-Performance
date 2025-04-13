const { registrarLog, limparLogs } = require('./logger');

const argumentos = process.argv.slice(2);

if (argumentos.includes('--clear')) {
  limparLogs();
  console.log('Logs limpos!');
}

// Exemplos de mensagens
registrarLog('Servidor iniciado com sucesso.', 'INFO');
registrarLog('Uso de memória elevado detectado.', 'WARN');
registrarLog('Erro ao conectar ao banco de dados.', 'ERROR');