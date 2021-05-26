import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Gifts extends React.Component {
  componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
        .then(tokenData => {
          const token = tokenData.__raw;
          const requestOptions = {
            headers: { "Authorization": `Bearer ${token}` },
            method: 'GET',
            // baseUrl: 'http://localhost:3001',
            url: 'http://localhost:3001/gifts'
          }
          axios(requestOptions).then(response => console.log(response.data));
        });
    }
  }

  addGift = () => {
    this.props.auth0.getIdTokenClaims()
      .then(tokenData => {
        const token = tokenData.__raw;
        const requestOptions = {
          headers: { "Authorization": `Bearer ${token}` },
          method: 'POST',
          url: 'http://localhost:3001/gifts',
          data: {
            name: 'Skateboard',
          }
        }
        axios(requestOptions).then(response => console.log(response.data));
      });
  }


  render() {
    console.log(this.props.auth0);

    return (
      <h1 onClick={this.addGift}>Hello from Gifts</h1>
    )
  }
}

export default withAuth0(Gifts);
