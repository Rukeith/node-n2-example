var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(cmd) {
    switch(cmd) {
        case 'hello':
            // 檢查指令
            console.log('Helloo!');
            break;
        case 'quit':
            // 離開指令模式介面
            rl.close();
            return;
    }
    rl.prompt();
});

// 顯示提示符號，並等待使用者輸入
rl.prompt();
