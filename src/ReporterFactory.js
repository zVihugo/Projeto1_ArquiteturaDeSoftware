import CidadesHTMLReporter from './CidadesHTMLReporter.js';
import CidadesTXTReporter from './CidadesTXTReporter.js';

export default class ReporterFactory {
  static create(format) {
    console.log(`Formato solicitado: ${format}`); 
    switch (format) {
      case 'html':
        return new CidadesHTMLReporter();
      case 'txt':
        return new CidadesTXTReporter();
      default:
        throw new Error('Formato desconhecido');
    }
  }
}
