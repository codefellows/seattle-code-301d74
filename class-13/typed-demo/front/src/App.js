import React from 'react';
import './App.css';
import LoginButton from './LoginButton.js';
import Gifts from './Gifts.js';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginButton />
        { this.props.auth0.isAuthenticated ? <Gifts /> : null}
      </div>
    );
  }
}

export default withAuth0(App);
