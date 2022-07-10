import * as XLSX from './xlsx.mjs';
import { readFileSync } from 'fs';

const filename = process.argv[2];
const filedata = readFileSync(filename);
const workbook = XLSX.read(filedata, {WTF: true, dense: true});
//console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
