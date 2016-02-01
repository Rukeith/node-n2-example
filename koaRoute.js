var koa = require('koa');
var route = require('koa-route');

var app = koa();

app.use(route.get('/hello', function *() {
    this.body = 'World';           
}));

app.use(route.get('/hi', function *() {
    this.body = 'hi';            
}));

app.listen(3000);
