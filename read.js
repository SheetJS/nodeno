import * as XLSX from './xlsx.mjs';
XLSX.set_fs(Bun.fs());

const filename = Bun.argv.at(-1);
const workbook = XLSX.readFile(filename, {WTF: true, dense: true});
//console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
