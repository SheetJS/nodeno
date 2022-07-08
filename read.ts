import * as XLSX from './xlsx.mjs';

const filename = Deno.args[0];
const filedata = Deno.readFileSync(filename);
const workbook = XLSX.read(filedata, {WTF: true, dense: true});
