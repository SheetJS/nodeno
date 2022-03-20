import * as XLSX from './xlsx.mjs';

const filename = Deno.args[0];
const workbook = XLSX.readFile(filename, {WTF: true, dense: true});
