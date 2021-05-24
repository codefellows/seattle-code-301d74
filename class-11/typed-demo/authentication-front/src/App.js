import React from 'react';
import './App.css';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Content from './Content.js';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginButton />
        <LogoutButton />
        {this.props.auth0.isAuthenticated
          ? <Content />
          : null}
      </div>
    );
  }
}

export default withAuth0(App);
