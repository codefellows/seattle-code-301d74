import React from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      location: {},
      search: '',
    }
  }

  setPokemonData = (data) => {
    this.setState({ data: data });
  }

  setPokemonImage = (name, url) => {
    console.log('setting pokemon value', name, url);

    let newState = this.state.data.map(pokemon => {
      if (pokemon.name === name) {
        pokemon.url = url;
      }
      return pokemon;
    });

    this.setState({ data: newState });

  }

  fetchData = () => {
    let response = axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        this.setPokemonData(response.data.results)

        response.data.results.forEach((pokemon) => {
          axios.get(pokemon.url)
            .then((singlePokemonResponse) => {
              let url = singlePokemonResponse.data.sprites.other['official-artwork'].front_default;
              this.setPokemonImage(pokemon.name, url);
            })
            .catch(console.error);
        })

      })
      .catch(error => console.error(error));

    console.log(response);
  }

  setLocation = (locationObj) => {
    this.setState({ location: locationObj }, () => console.log(this.state));
  }

  fetchLocation = async () => {
    let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.search}&format=json`);
    this.setLocation(response.data[0]);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>Get Pokemon</button>
        {this.state.data.map(pokemon => {
          return (
            <>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.url} alt={pokemon.name} />
            </>
          )
        })}
        <input onChange={(e) => this.setState({ search: e.target.value })} type='text' />
        <button onClick={this.fetchLocation}>Search Location</button>
        <div>{this.state.location.display_name ? <p>{this.state.location.display_name}</p> : ''}</div>
      </div>
    );
  }
}

export default App;
