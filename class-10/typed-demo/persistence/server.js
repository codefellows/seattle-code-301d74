'use strict';

require('dotenv').config(); // I forgot this earlier :(
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.WEATHER_API_KEY;

// define keys by feature
const inMemoryDatabase = {};

// &lat=38.123&lon=-78.543 for query testing!
app.get('/weather', async (req, res) => {
  // route handling
  const { lat, lon } = req.query; // javascript object destructing.

  // Does whether Data in the DB exist && is the weatherData too old 
  let weatherRecord = inMemoryDatabase['weather'];
  console.log(weatherRecord, Date.now() - 600000);
  let isFresh = weatherRecord && weatherRecord.timestamp > (Date.now() - 10000);
  if (isFresh) {
    console.log('gradding data from db');

    res.json(weatherRecord);

  } else {
    console.log('requesting fresh data');

    // const lat = request.params.lat;
    // const lon = request.params.lon;

    try {
      const url = `http://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lon}`;

      const weatherResponse = await axios.get(url);
      const weatherData = weatherResponse.data.data;

      const databaseObject = {
        data: weatherData,
        timestamp: Date.now(),
      }

      console.log('storing in database');
      inMemoryDatabase['weather'] = databaseObject; // this will place something at the given key, and replace something if it's already there.

      res.json(weatherData);
    } catch (e) {
      console.log(e);
      res.send("error fetching weather data");
    }
  }
});

app.listen(PORT, () => console.log('Server is up on ' + PORT));
