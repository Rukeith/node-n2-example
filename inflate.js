var zlib = require('zlib');
var Buffer = require('buffer').Buffer;

var source = new Buffer('Hello World');

var result = zlib.deflate(source);

var original = zlib.inflate(result);

console.log(original);
console.log(original.toString());
