var koa = require('koa');

var app = koa();

// 當有瀏覽器要求頁面時，進行處理
app.use(function *() {
    this.body = 'My First Koa Web';        
});

app.listen(3000);
