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
          <Card.Img onClick={() => this.props.updateKeyword(this.props.keyword)} src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
          <Card.Text>{this.props.horns}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
          <Button onClick={this.increment}>Vote</Button>
          <Card.Text>
            <Card.Img style={{ width: '50px' }} src={'data:image/png;base64,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'} alt={'heart'} />
            {this.state.count}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
