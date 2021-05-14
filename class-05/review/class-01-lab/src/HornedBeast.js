import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BeastModal from './Modal.js';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modalState: false,
    }
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  modalToggle = () => {
    this.setState({ modalState: !(this.state.modalState) })
  }

  closeModal = () => {
    this.setState({ modalState: false })
  }

  render() {
    return (
      <div id="HornedBeast">
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{`This has ${this.state.count} likes`}</Card.Text>
          <Button onClick={this.incrementCount} >Click This To Like</Button>
          <Button onClick={this.modalToggle} >Click here to see as a modal</Button>
        </Card>
        <BeastModal
          activeModal={this.state.modalState}
          closeModal={this.closeModal}
          title={this.props.title}
          src={this.props.src}
          description={this.props.description}
          keyword={this.props.keyword}
        />
      </div>
    )
  }
}

export default HornedBeast;