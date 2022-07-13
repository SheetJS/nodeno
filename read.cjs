const XLSX = require('./xlsx.flow');
const fs = require("fs");

const filename = Bun.argv.at(-1);
const workbook = XLSX.read(fs.readFileSync(filename), {WTF: true, dense: true});
workbook.SheetNames.forEach(n => console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[n])));
//console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]));
