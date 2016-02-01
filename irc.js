var irc = require('slate-irc');
var net = require('net');

var stream = net.connect({
    port: 6667,
    host: 'irc-freenode.org'
});

var client = irc(stream);

client.pass('pass');

client.nick('Lan');

client.user('Lan', 'FengLan');

client.join("#node.js");
