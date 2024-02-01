//const express = require('express');
const xlsx = require('xlsx');
const workbook = xlsx.readFile('Book1.xlsx');

// const app = express();
// const port = 3000;

//app.post('/excel', function (req, res){

  const sheetNames = workbook.SheetNames;

let studentdata = [];
let admindata = [];

//for (let i = 0; i < sheetNames.length; i++) {
  //const sheet = workbook.Sheets[sheetNames[i]];
  //const json = xlsx.utils.sheet_to_json(sheet);
  //data.push(json);
  const sheetz = workbook.Sheets[sheetNames[0]];
  const sheeto = workbook.Sheets[sheetNames[1]];
  
  const jsondatasheetzero = xlsx.utils.sheet_to_json(sheetz);
  const jsondatasheetone = xlsx.utils.sheet_to_json(sheeto);

  studentdata.push(jsondatasheetzero);
  admindata.push(jsondatasheetone);
//}

console.log(studentdata);
//console.log(admindata);

module.exports = { studentdata, admindata }

//res.json(data); 
//});

// app.listen(port, ()=>{
//   console.log(`listening on ${port}`);
// });



