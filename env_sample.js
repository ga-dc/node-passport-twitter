module.exports = (function(){
  process.env.consumerKey = "something";
  process.env.consumerSecret = "something else";
  process.env.callbackUrl = "http://localhost:3000/auth/twitter/callback";
}())
