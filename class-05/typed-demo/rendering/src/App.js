import React from 'react';
import './App.css';
import Component1 from './Component1.js';
import Component2 from './Component2.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderComponent1: false,
    }
  }

  handleRender = () => {
    this.setState({ renderComponent1: !this.state.renderComponent1 });
  }

  render() {
    return (
      <div className="App" >
        {this.state.renderComponent1
          ? <Component1 />
          : <Component2 />
        }
        <button onClick={this.handleRender}>Toggle Components</button>

        <BrowserRouter>
          <nav>
            <Link to="/">home page</Link>
            <Link to="/about">about page</Link>
          </nav>
          {/* any child in here has the potential to be routed */}
          <Route exact path="/">
            <h2>hello from /</h2>
          </Route>
          <Route exact path="/about">
            <h2>hello from /about</h2>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
