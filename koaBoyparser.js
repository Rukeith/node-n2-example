var koa = require('koa');
var route = require('koa-route');
var bodyParser = require('koa-bodyparser');

var app = koa();
app.use(bodyParser());

app.use(route.post('/post', function *() {
    console.log(this.request.body);
    this.body = JSON.stringify(this.request.body);
}));

app.listen(3000);
