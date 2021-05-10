import React from 'react';
import './App.css';
import Header from './Header.js';

class App extends React.Component {
  constructor() {
    super();
  }

  // method that tells our component what is displayed
  render() {
    // the render returns JSX
    return (
      <div id="app">
        <h1>React App Component</h1>
        <Header title="My awesome webpage" />
      </div>
    )
  }
}

export default App;
