var I18N = require('i18n-2');
var express = require('express');

var app = express();

I18N.expressBind(app, {
    locales: ['en', 'zh-tw']        
});

app.use(function(req, res, next) {
    req.i18n.setLocale(req.i18n.prefLocale); 
    next();
});

app.get('/', function(req, res) {
    res.send(req.i18n.__('Hello!'));       
});

app.listen(3000);
