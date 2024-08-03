import CidadesHTMLReporter from './CidadesHTMLReporter.js';
import CidadesTXTReporter from './CidadesTXTReporter.js';

export default class FactRep {
  static create(format) {
    console.log(`Formato solicitado: ${format}`);
    
    const reporters = {
      'html': CidadesHTMLReporter,
      'txt': CidadesTXTReporter
    };
    
    const ReporterClass = reporters[format];
    
    if (!ReporterClass) {
      throw new Error('Formato desconhecido');
    }
    
    return new ReporterClass();
  }
}