import fs from 'fs';

class Rep {
  ler(caminho) {
    try {
      const data = fs.readFileSync(caminho, 'utf8');
      return data;
    } catch (err) {
      throw new Error(`Erro ao ler o arquivo: ${err.message}`);
    }
  }
  
  parse(data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      throw new Error(`Erro ao analisar o conteúdo: ${err.message}`);
    }
  }

  reportar(data) {
    console.log('Relatório:', data);
  }
}

export { Rep };