import React from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      location: null,
      map: null,
      searchQuery: '',
    }
  }

  setQuery = (e) => {
    const query = e.target.value;
    this.setState({ searchQuery: query });
  }

  handleLocation = (e) => {
    // url to the server
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        let location = response.data[0];
        this.setState({
          location: location,
          map: `https:maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=10`
        });

        // axios.get(`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`)
        //   .then(response => {
        //     console.log(response);
        //     this.setState({ map: response.data });
        //   });

      });
  };

  getShoppingList = () => {

    axios.get('http://localhost:3030/shoppinglist')
      .then(response => {
        console.log(response.data); //
      });
  }

  render() {
    return (
      <div className="App" >
        <input onChange={this.setQuery} />
        <button onClick={this.handleLocation}>Explore!</button>
        <p>{this.state.location ? this.state.location.display_name : 'Please submit location form'}</p>
        <img src={this.state.map ? this.state.map : null} alt="location map" />
        <button onClick={this.getShoppingList}>Get Shopping List!</button>
      </div>
    );
  }
}

export default App;
