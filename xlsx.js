var fs = require('fs');
var officegen = require('officegen');

// Create a new excel document
var xlsx = officegen('xlsx');
xlsx.name = 'My excel document';

// Create a new sheet
var sheet = xlsx.makeNewSheet();
sheet.data[10] = [];
sheet.data[10][2] = 'Hello';
sheet.setCell('G8', 'Node.js!');

// Save as a new file
var output = fs.createWriteStream('output.xlsx');
xlsx.generate(output);
