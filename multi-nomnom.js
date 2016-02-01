var opts = require('nomnom').option('debug', {
        abbr: 'd',
        flag: true,
        help: 'Print debuggin info'
    }).option('name', {
        abbr: 'n',
        default: 'fred',
        help: 'given a name'
    }).option('version', {
        flag: true,
        help: 'print version and exit',
        callback: function() {
            return 'version 0.1.2';
        }
    }).parse();

console.dir(opts);
