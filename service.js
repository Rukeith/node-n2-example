var Service = require('node-mac').Service;

var svc = new Service({
    name: 'Hello World',
    description: 'The nodejs.org example web server.',
    script: '/helloworld.js'
});

// 當系統服務註冊成功後，馬上啟動此服務
svc.on('install', function() {
    svc.start();        
});

// 註冊
svc.install();
