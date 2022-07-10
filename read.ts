import * as XLSX from './xlsx.mjs';

const filename = Deno.args[0];
const filedata = Deno.readFileSync(filename);
const workbook = XLSX.read(filedata, {WTF: true, dense: true});
//console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
