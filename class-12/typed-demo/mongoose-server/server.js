'use strict';

// use mongoose to connect to a db

// Is an instance of mongo running that you can connect to?
//   In order to run locally, mongo needs folder to place all of the database files.
//   I created ./db for mongo files
//   start and instance with `mongod --dbpath <path-to-folder>

const mongoose = require('mongoose');

// Mongoose requires `models` in order to perform CRUD, which takes somethingit calls a schema:

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
});

// Models consume schemas
const BookModel = mongoose.model('books', bookSchema);

const express = require('express');
const app = express();

app.get('/books', async (req, res) => {
  // here is where crud happens
  // read all books.
  try {
    let booksFromDB = await BookModel.find({}); // empty object says read all books
    res.send(booksFromDB);
  } catch (e) {
    res.status(500).send('Something went wrong :(');
  }
});


// url to your db instance
mongoose.connect('mongodb://127.0.0.1:27017/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('DB connection success');

  let newBook = new BookModel({ title: 'Jacobs first book', author: 'Jacob' });
  await newBook.save();

  // run your server
  app.listen(3001, () => {
    console.log('Books server up');
  });
});
