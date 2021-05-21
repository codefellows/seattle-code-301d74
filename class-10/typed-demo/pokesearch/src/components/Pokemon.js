import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      abilities: [],
      stats: [],
      search: '',
    }
  }
  handleClick = async (e) => {
    let response = await axios.get(process.env.REACT_APP_SERVER + '/pokemon?search=' + this.state.search);
    console.log(response.data);
    this.setState({ name: response.data.name, abilities: response.data.abilities, stats: response.data.stats });
  }
  render() {
    return (
      <div className="Pokemon">
        <Form>
          <Form.Group controlId="formInput">
            <Form.Label>Search For a Pokemon</Form.Label>
            <Form.Control onChange={(e) => this.setState({ search: e.target.value })} type="text" placeholder='pokemon' />
          </Form.Group>
          <Button variant="danger" onClick={this.handleClick}>
            Submit!
        </Button>
          <p>{this.state.name}</p>
        </Form>
      </div>
    );
  }
}
export default Pokemon;
