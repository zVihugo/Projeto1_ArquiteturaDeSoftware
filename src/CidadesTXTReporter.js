import * as fs from 'node:fs';
import { IReporter } from './IReporter.js';

export default class CidadesTXTReporter extends IReporter {
  ler(caminho) {
    this.cidades = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }
}
