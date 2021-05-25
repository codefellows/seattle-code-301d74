'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
});

// Models consume schemas
const BookModel = mongoose.model('books', bookSchema);

module.exports = BookModel;
