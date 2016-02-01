var request = require('request');
// 建立一個新request物件，並啟用 Cookie
var req = request.defaults({jar: true});

req('http://www.google.com/', function(error, response, body) {
    if (!error && response.statusCode == 200)
        console.log(body);
});
