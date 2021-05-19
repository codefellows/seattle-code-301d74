import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  // this will be called automatically by react
  componentDidMount = () => {
    this.getData();
  }

  getData = async () => {
    let response = await axios.get('http://localhost:3030/data?search=seattle');
    this.setState({ data: response.data });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>City Explorer</h1>
      </div>
    );
  }
}

export default App;
