var child_process = require('child_process');

child_process.exec('ls -lh /usr', function(err, stdout, stderr) {
    if (err)
        return;

    console.log(stdout);
});
