'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const UserGifts = require('./UserGifts.js');

const PORT = process.env.PORT || 3001;

const client = jwksClient({
  jwksUri: 'https://dev-o879tgum.us.auth0.com/.well-known/jwks.json',
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

function verifyToken(token, callback) {
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      console.error('Something went wrong');
      return callback(err);
    }
    callback(user);
  })
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const app = express();
app.use(cors());

// allows our express application to recieve json data on a request
app.use(express.json());


app.get('/gifts', (req, res) => {

  // where does the token live
  const token = req.headers.authorization.split(' ')[1];

  // verify that the token is legit
  verifyToken(token, findGifts);

  async function findGifts(user) {
    // mongoose model to find via user
    // res.send User.gifts
    let Users = await UserGifts.UserModel.find({ email: user.email });
    if (!Users.length) {
      res.send([]);
    }
    res.send(Users[0].gifts);
  }
});
app.post('/gifts', (req, res) => {

  const giftData = req.body;
  console.log(giftData);
  const token = req.headers.authorization.split(' ')[1];
  verifyToken(token, addGift);

  async function addGift(user) {
    console.log(user);
    let usersFromDB = await UserGifts.UserModel.find({ email: user.email });

    let newGift = await UserGifts.GiftModel.create(giftData);

    usersFromDB[0].gifts.push(newGift);

    await usersFromDB[0].save();

    res.send(usersFromDB[0].gifts);
  }

});
app.delete('/gifts/:giftId', (req, res) => {
  const giftName = request.params.giftId;

  // verfy token

  // find a user

  // find a gift by id / name
  // remove from user gifts array
  // respond with Users[0].gifts
});

db.once('open', function () {
  app.listen(PORT, () => {

    UserGifts.UserModel.find({})
      .then(results => {
        if (results.length === 0) {
          const FirstUser = new UserGifts.UserModel({ email: 'jacob@codefellows.com', gifts: [] });
          FirstUser.save();
        }
      });

    console.log('API server running :::' + PORT);
  });
});
