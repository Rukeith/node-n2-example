var cheerio = require('cheerio');

var html = '<ul id=\"fruits\">' +
    '<li class=\"apple\">Apple</li>' +
    '<li class=\"orange\">Orange</li>' +
    '<li class=\"pear\">Pear</li>' +
    '</ul>';

// 載入頁面內容
var $ = cheerio.load(html);

// 取得li標籤，class等於apple的內容
console.log($('li.apple').text());
