'use strict';

const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
  name: { type: String },
});

const GiftModel = mongoose.model('Gift', GiftSchema);

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  gifts: [GiftSchema],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserModel,
  GiftModel,
}
