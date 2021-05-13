import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalHorn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  openModal = () => {
    this.setState({ show: true });
  }

  render() {
    // console.log(this.props.selectedBeast, 'how can we upadte our boolean from from the existance of data in this prop?');
    return (
      <>
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalHorn;
