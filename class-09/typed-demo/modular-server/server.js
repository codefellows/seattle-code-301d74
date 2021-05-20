'use strict';

require('dotenv').config(); // this allows us to use .env API keys!

// without create-react-app managing our code, node likes require()  instead of `import`
const express = require('express');
const cors = require('cors');
// const axios = require('axios');

const handleMovies = require('./lib/movies/movieHandler.js');
const weather = require('./lib/weather/weatherHandler.js');

const app = express();
app.use(cors());

app.get('/weather', weather.handleWeather);
app.get('/movies', handleMovies);


app.listen(3030, () => console.log("Server is up"));
// async function handleWeather(request, response) {

//   const latQ = request.query.lat;
//   const lonQ = request.query.lon;

//   let url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${latQ}&lon=${lonQ}&key=${WEATHER_API_KEY}`

//   let results = await callAPI(url, Error);
//   let weatherData = results.data.map(day => new Forecast(day));
//   response.send(weatherData);
// }

// async function handleMovies(request, response) {
//   const searchQ = request.query.search;

//   let url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQ}`

//   let results = await callAPI(url, Error);
//   let responseData = results.results.map(movie => new Movie);
//   response.json(responseData);
// }

// async function callAPI(url, handleError) {
//   try {
//     let result = axios.get(url);
//     return result.data;
//   } catch (e) {
//     handleError(e);
//   }
// }

// function Movie(movie) {

//   this.title = movie.title;
//   this.overview = movie.overview;
//   this.average_votes = movie.vote_average;
//   this.total_votes = movie.vote_count;
//   this.image_url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
//   this.popularity = movie.popularity;
//   this.released_on = movie.release_date;

// }

// function Forecast(day) {
//   this.date = day.datetime;
//   this.description = `Low of ${day.low_temp} and high of ${day.high_temp}, with ${day.weather.description}`;

// }

// function Error(error, response) {
//   response.status('500').send('Internal Server Error');
// }

// async function handleWeather(request, response) {

//   const latQ = request.query.lat
//   const lonQ = request.query.lon

//   let url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${latQ}&lon=${lonQ}&key=${WEATHER_API_KEY}`

//   try {

//     const results = await axios.get(url); // send the request

//     const allForecast = results.data.data.map(day => new Forecast(day)); // iterates through the data and create a ForeCast object
//     response.send(allForecast);

//   } catch (error) {
//     Error(error, response);
//   }

// };

// async function handleMovies(request, response) {

//   const searchQ = request.query.search

//   let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQ}`

//   try {

//     const results = await axios.get(urlMovie);

//     const allMovies = results.data.results.map(movie => new Movie(movie)); // creates a new Movie
//     response.send(allMovies);
//     console.log(typeof (allMovies));

//   } catch (error) {
//     Error(error, response);
//   }

// };
