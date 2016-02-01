var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost/test', function(err, db) {
    // 選擇資料表 contact
    db.collection('contact', function(err, collection) {
        // 取得 contact 資料表裡所有資料
        collection.find({}, function(err, rows) {
            // 印出資料表所有資料
            for (var index in rows)
                console.log(rows[index]);
        });    
    });            
});
