'use strict';

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const LOCATION_API_KEY = process.env.LOCATION_IQ_API_KEY;
const PHOTO_API_KEY = process.env.UNSPLASH_API_KEY;

// class Photo {}??

async function fetchLocationData(searchQuery) {
  let locationResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${LOCATION_API_KEY}&q=${searchQuery}&format=json`);

  return locationResponse.data[0];
}

async function fetchPhotoData(searchQuery) {
  let photoResponse = await axios.get(`https://api.unsplash.com/search/photos?client_id=${PHOTO_API_KEY}&query=${searchQuery}`);

  return photoResponse.data.results;
}

// tells our express app to the cors library when requests come in.
app.use(cors());

// how to handle an HTTP
app.get('/data', async (request, response) => {

  let searchQuery = request.query.search; // {search: "seattle"}
  let locationData = await fetchLocationData(searchQuery);
  let photoData = await fetchPhotoData(searchQuery);

  response.json({ locationData, photoData });
});

app.get('/photos', async (request, response) => {

  let searchQuery = request.query.search;
  let photoData = await fetchPhotoData(searchQuery);

  response.json(photoData);
});

// actually wait and listen for http requests
app.listen(3030, () => console.log('server up!'));
