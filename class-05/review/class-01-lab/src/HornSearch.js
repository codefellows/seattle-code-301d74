import React from 'react';
import Form from 'react-bootstrap/Form';

class HornSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHorn: this.props.searchHorn,
    }
  }

  render() {
    return (
      <div id="SearchHornForm">
        <Form>
          <Form.Label>Filter By Horns</Form.Label>
          <Form.Control onChange={this.props.handleHorns} as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>100</option>
          </Form.Control>
        </Form>
      </div>
    )
  }
}

export default HornSearch;