var xmpp = require('node-xmpp-server');

var server = xmpp.C2SServer({
    port: 5222,
    domain: 'localhost'
});

server.on('connect', function(client) {
    client.on('online', function() {
        // 當客戶完成登入認證等工作，觸發此事件    
    });
    client.on('disconnect', function() {
        // 當客戶斷線時，觸發此事件    
    });
});
