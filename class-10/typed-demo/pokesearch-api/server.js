'use strict';
//Setting up global environment
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();
const PORT = process.env.PORT || 3001; // I added this

//Set up the app and the things that uses
const app = express();
app.use(cors());
app.get('/pokemon', getPoke);


// our data comes from an extrenal sourc and we have to fetch it everytime.
async function getPoke(request, response) {
  const pokeName = request.query.search;
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  let pokeResponse = await axios.get(pokeUrl)
  console.log(pokeResponse);

  class Pokemon {
    constructor(info) {
      this.name = info.name;
      this.abilities = info.abilities;
      this.stats = info.stats;
    }
  }
  try {
    const pokemonData = new Pokemon(pokeResponse.data);
    //   response.send(pokemonData);
    response.json(pokemonData);
  } catch (error) {
    console.log('an error has occured');
    response.send('Working on it');
    // Error(error, response);
  }
}

app.listen(PORT, () => console.log('Server is up on ' + PORT));
