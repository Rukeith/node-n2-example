var msgpack = require('msgpack');
var myObj = {
    name: 'Fred',
    email: 'cfsghost@gmail.com'
};

var packedObj = msgpack.pack(myObj);
console.log(packedObj);
