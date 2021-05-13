import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      numberOfHorns: 0,
    }
  }

  handleKeyword = (e) => {
    let value = e.target.value;
    this.setState({ searchKeyword: value });
  }

  handleHorns = (e) => {
    let value = e.target.value;
    console.log(value)
    this.setState({ numberOfHorns: value });
  }

  handleSubmit = (e) => {
    console.log(this.state.searchKeyword, this.state.numberOfHorns);
    // this.props.handleSubmit;
  }

  render() {
    return (
      <Form>
        <Form.Label>Filter Beasts By Title</Form.Label>
        <Form.Control
          onChange={(event) => {
            this.props.setSearch(event.target.value);
            this.handleKeyword(event);
          }}
          type='text'
          placeholder='enter title here'
        />
        <Form.Label>Filter By Horns</Form.Label>
        <Form.Control onChange={this.handleHorns} as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <Button onClick={this.handleSubmit}>
          Submit Form
        </Button>
      </Form>
    )
  }

}

export default BeastForm;
