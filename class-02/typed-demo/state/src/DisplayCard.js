import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ width: '200px' }}>
        <Card.Body>
          <Card.Title>{this.props.cardTitle}</Card.Title>
          <Card.Text>{this.props.display}</Card.Text>
          <Button variant="primary" onClick={this.props.callback}>{this.props.buttonText}</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default DisplayCard;
