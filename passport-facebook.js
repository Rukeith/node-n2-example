var FacebookStrategy = require('passport-facebook').Strategy;
var FACEBOOK_APP_ID = '833009613412132';
var FACEBOOOK_APP_SECRET = 'e7c26c30a5f355ca4e3aa2a158419b3c';

var cookieSession = require('cookie-session');
app.use(cookieSession({keys: ['asdfghjkl!@#$%ASDFGHJ']}));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook'));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost/auth/facebook/oauth2callback"
    }, function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

app.get('/auth/facebook/oauth2callback', 
    passport.authenticate('facebook', {
        failureRedirect: '/auth/Error'    
    }), function(req, res) {
        res.send('UserName: ' + req.user.name.givenName + ', eMail: ' + req.user.emails[0].value);    
    }
);
