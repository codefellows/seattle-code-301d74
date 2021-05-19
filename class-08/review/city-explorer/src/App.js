import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: { name: 'Jacob', age: 31 }
    }
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.location}</p>
      </div>
    );
  }
}

export default App;
