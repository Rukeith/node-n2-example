var req = new sql.Request(conn);

req.input('name', sql.VarChar, 'Fred');

var sqlStr = 'SELECT * FROM myTable WHERE name = @name';
req.query(sqlStr, function(err, rs) {
           
});
