var express = require("express");
var passport = require("passport");
var Strategy = require("passport-twitter").Strategy;
var env = process.env.consumerKey ? null : require("./env");

passport.use(new Strategy(
  {
    consumerKey: process.env.consumerKey,
    consumerSecret: process.env.consumerSecret,
    callbackURL: process.env.callbackUrl
  },
  function(token, tokenSecret, profile, cb){
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

var app = express();
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("express-session")({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
  res.send("<a href='/auth/twitter/login'>Login</a>");
});

app.get("/auth/twitter/login", passport.authenticate("twitter"));

app.get("/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/auth/twitter/show");
  }
);

app.get("/auth/twitter/show", function(req, res){
  res.json(req.session);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Whee, I'm working!");
});
