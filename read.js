import * as XLSX from './xlsx.mjs';

const filename = Bun.argv.at(-1);
const filedata = Bun.fs().readFileSync(filename);
const workbook = XLSX.read(filedata, {WTF: true, dense: true});
