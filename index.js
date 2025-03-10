import FactRep from './src/FactRep.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';


const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 --file [file] --format [format]')
  .demandOption(['file', 'format'])
  .argv;

const filename = argv.file;
const format = argv.format;

console.log(`Argumentos recebidos: filename=${filename}, format=${format}`);

try {
  const reporter = FactRep.create(format);
  reporter.ler(filename);
  reporter.parse();
  const output = reporter.reportar();
  console.log(output);
} catch (error) {
  console.error(`Erro no script para formato ${format}:`, error.message);
}
