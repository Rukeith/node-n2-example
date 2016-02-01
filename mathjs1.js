var math = require('mathjs');
var kk = math.print('Hello $user.name! The date is $date', {
    user: {
        name: 'Mary'
    },

    date: new Date(2013, 2, 23).toISOString().substring(0, 10)
});
console.log(kk);
