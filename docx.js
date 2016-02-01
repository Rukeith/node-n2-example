var fs = require('fs');
var officegen = require('officegen');

// Create a new .doc document
var docx = officegen('docx');

// Create a new paragraph for header
var p = docx.createP();
p.options.align = 'center';
p.addText('Hi Node.js', {
    color: 'ffff00',
    bold: true,
    underline: true,
    font_face: 'Arial',
    font_size: 48
});

// Save as a new file
var output = fs.createWriteStream('output.docx');
docx.generate(output);
