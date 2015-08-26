# passport-twitter

...doesn't have very good documentation.

This is an extremely fancy app that successfully uses it.

1. Authentcate a Twitter app
  - https://apps.twitter.com
  - Use `http://127.0.0.1:3000/auth/twitter/callback` as the callback URL
2. Rename `env_sample.js` to `env.js` and fill in the blanks
  - Note that the callback URL there is `localhost` instead of `127.0.0.1`. However, when you actually enter the URL on Twitter Apps, it should be `127.0.0.1` instead of `localhost`.
