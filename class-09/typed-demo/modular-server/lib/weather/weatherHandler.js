'use strict';

const callAPI = require('../callApi.js');

async function handleWeather(request, response) {

  const latQ = request.query.lat;
  const lonQ = request.query.lon;

  let url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${latQ}&lon=${lonQ}&key=${WEATHER_API_KEY}`

  let results = await callAPI(url, Error);
  let weatherData = results.data.map(day => new Forecast(day));
  response.send(weatherData);
}

function Forecast(day) {
  this.date = day.datetime;
  this.description = `Low of ${day.low_temp} and high of ${day.high_temp}, with ${day.weather.description}`;

}

module.exports = {
  forecast: Forecast,
  handleWeather: handleWeather,
}
