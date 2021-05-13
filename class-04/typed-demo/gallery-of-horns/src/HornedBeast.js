import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <Card className="horned-beast" style={{ width: '250px' }}>
        <Card.Body>
          <Card.Img onClick={this.props.selectBeast} src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
          <Card.Text>{this.props.horns}</Card.Text>
          <Card.Text>{this.props.title}</Card.Text>
          <Button onClick={this.increment}>Vote</Button>
          <Card.Text>
            {this.state.count}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

}

export default HornedBeast;
