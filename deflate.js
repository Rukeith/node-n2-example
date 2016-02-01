var zlib = require('zlib');
var Buffer = require('buffer').Buffer;

var source = new Buffer('Hello World');

var result = zlib.deflate(source);
console.log(result);
