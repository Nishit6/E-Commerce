const passport = require('passport');
const User = require('./model/user');


const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(User, done) {
    done(null, User.id);
  });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

  passport.deserializeUser(function(User, done) {
    
      done(null, User);
   
  });

passport.use(new GoogleStrategy({
    clientID: "370953968256-qm33pei8jq0d9krogo8bebsb2417uc4p.apps.googleusercontent.com",
    clientSecret: "n4XY4gKYYUE0TyDQrKQkg8R9",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(null, profile);
    
  }
));