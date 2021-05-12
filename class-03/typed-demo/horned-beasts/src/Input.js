import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleForm = (event) => {
    event.preventDefault();

    // vanilla html / js way of getting forms input values;
    // console.log(event.target);
    // let inputValue = event.target.keyword.value;
    this.props.updateKeyword(this.state.input);
  }

  // important for handle form inputs directly in react
  handleInput = (event) => {
    let value = event.target.value;
    this.setState({ input: value });
  }

  render() {
    return (
      // <form onSubmit={this.handleForm}>
      //   <input name="keyword" />
      //   <button type="submit">Submit Keyword</button>
      // </form>
      <Form>
        <Form.Group controlId="formInput">
          <Form.Label>Keyword</Form.Label>
          <Form.Control onChange={this.handleInput} type="text" placeholder="type here" />
          <Form.Text className="text-muted">
            Enter new keyword
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={this.handleForm}>
          Submit
        </Button>
      </Form>
    )
  }

}

export default Input;
