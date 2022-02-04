const passport = require('passport');
const dotenv = require("dotenv");
dotenv.config()
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const  GithubStrategy = require('passport-github2').Strategy;
// google passport lib
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env. GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));
// github passport lib
passport.use(new GithubStrategy({
    clientID:process.env. GITHUB_CLIENT_ID,
    clientSecret:process.env. GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));
passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((user, done) => {
    done(null, user);
})