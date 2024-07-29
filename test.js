import { exec } from 'child_process';

const testCases = [
  { format: 'html', expectedSubstring: '<html>' },
  { format: 'txt', expectedSubstring: 'Relatório de Nomes de Cidades' },
];

testCases.forEach(({ format, expectedSubstring }) => {
  exec(`node index.js ./data/cidades-2.json ${format}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o teste para formato ${format}:`, error);
      return;
    }
    if (stderr) {
      console.error(`Erro no script para formato ${format}:`, stderr);
      return;
    }
    if (stdout.includes(expectedSubstring)) {
      console.log(`Teste para formato ${format} passou`);
    } else {
      console.error(`Teste para formato ${format} falhou`);
    }
  });
});
