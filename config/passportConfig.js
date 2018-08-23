// Requires
const passport = require('passport');
const passportLocalStrategy = require('passport-local');

// Declare variables
const db = require('../models');

// Provide serialize/deserialize functions so we can use session
passport.serializeUser(function(user, callback) { callback(null, user.id); });
passport.deserializeUser( (id, callback) => {
  db.user.findById(id)
  .then( user => { callback(null, user); })
  .catch( err => { callback(err, null); }) });

// Do the actual login
passport.use( new passportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, callback) => {
  db.user.findOne({ where: { email } })
  .then( foundUser => {
    if(!foundUser || !foundUser.isValidPassword(password)) {
      callback('Invalid User', null);
    } else {
      callback(null, foundUser);
    }
  }).catch( err => callback(err, null))
}));

module.exports = passport;
