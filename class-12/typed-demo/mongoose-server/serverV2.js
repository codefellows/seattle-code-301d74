'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const BookModel = require('./models/books.js');

app.use(cors());

app.get('/books', async (req, res) => {

  try {
    let booksFromDB = await BookModel.find({}); // READ as CRUD
    res.send(booksFromDB);

  } catch (e) {
    res.status(500).send('Something went wrong :(');
  }
});

// Create from our CRUD
async function addBook(obj) { // what things from the DB am I CRUDing
  let newBook = new BookModel(obj);
  return await newBook.save(); // Create for our CRUD
}

// this now comes from the .env file.  Make sure it looks something like this:
/// mongodb + srv://USERNAME:PASSWORD@cluster0.xrwkq.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('DB connection success');

  let books = await BookModel.find({});
  if (books.length === 0) {
    await addBook({ title: 'Something new', author: 'Jacob' });
  }

  // run your server
  app.listen(process.env.PORT, () => {
    console.log('Books server up');
  });
});
