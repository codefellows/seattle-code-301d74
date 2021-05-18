'use strict';

// without create-react-app managing our code, node likes require()  instead of `import`
const express = require('express');
const cors = require('cors');

// Heroku needs this!!
const PORT = process.env.PORT || 3030;

// initilize the express library
const app = express();
app.use(cors());

// defining a function to run for each endpoint we want to get data from.
app.get('/', (request, response) => {

  console.log(request.query);

  response.send('welcome to my server');
});

app.get('/shoppinglist', (request, response) => {

  const data = [
    'milk',
    'eggs',
    'bread',
  ]

  response.json(data);
});


// open up the server on a specfic port
app.listen(PORT, () => console.log('Server us running'));
