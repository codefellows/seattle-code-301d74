'use strict';

const callAPI = require('../callApi.js');

async function handleMovies(request, response) {
  const searchQ = request.query.search;

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQ}`

  let results = await callAPI(url, Error);
  let responseData = results.results.map(movie => new Movie(movie));
  response.json(responseData);
}

function Movie(movie) {

  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;

}

// this needs to be in any file that you want exported.
module.exports = handleMovies;
