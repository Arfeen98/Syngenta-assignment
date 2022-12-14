const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
const passport = require("passport");
const UserModel = require('../Models/user.model');

passport.use(new GoogleStrategy({
    clientID:process.env. GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:7000/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
    let email = profile._json.email
    let password = profile._json.sub
    const user = new UserModel({
        email,
        password
    })
      return cb(null, user);
  }
));
module.exports=passport;