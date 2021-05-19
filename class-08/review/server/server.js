'use strict';

// THIS IS SUNNY'S SERVER
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const weather = require('./data/weather.json');
// const { request } = require('express');

const app = express();
app.use(cors());


const PORT = process.env.PORT || 3000;

class Forecast {
  constructor(date, description) {
    // super();
    this.date = date;
    this.description = description;
  }
}

// app.get('/', (request, response) => {
//     response.send('hello from the home route!');
// });

function searchWeather(data, searchQuery) {
  console.log(searchQuery);

  let weather = data.find()
  let results = weather.map(forcast => {
    return new Forecast(forecast.valid_data, forecast.weather.description);
  });

  return results;
}

app.get(`/weather?`, (request, response) => {
  let result = searchWeather(weather, request.query);
  response.status(200).send(result);
});

// this is a catch all
app.get('*', (request, response) => {
  response.status(500).send('Uh oh... Something went wrong');
});

// this line tells our express app to listen for incoming requests.
app.listen(PORT, () => console.log(`listening on ${PORT}`));
