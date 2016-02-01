var fs = require('fs');
var officegen = require('officegen');

// Create a new PowerPoint document
var pptx = officegen('pptx');
pptx.setDocTitle('Using Node.js to Generate PPTX');

// Create a new slide page
var slide = pptx.makeNewSlide();

// Set black background and white foreground 
slide.back = '000000';
slide.color = 'ffffff';

// Add a header
slide.addText('Hi Node.js', {
    x: 'c',        
    y: 'c',
    cx: 600,
    cy: 200,
    color: 'ffff00',
    bold: true,
    underline: true,
    font_face: 'Arial',
    font_size: 48
});

// Save as a new file
var output = fs.createWriteStream('output.pptx');
pptx.generate(output);
