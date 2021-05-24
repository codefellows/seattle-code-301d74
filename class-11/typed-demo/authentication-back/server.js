'use strict';

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://dev-o879tgum.us.auth0.com/.well-known/jwks.json',
});

const app = express();
app.use(cors());

// this is straight from docs.
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

app.get('/test', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      res.send('Something went wrong');
    }
    res.send(user);
  });
});

app.listen(3001, () => console.log('we are up!'));
