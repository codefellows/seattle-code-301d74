import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from './DisplayCard.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        {/* <Card style={{ width: '200px' }}>
          <Card.Body>
            <Card.Title>My Counter Component</Card.Title>
            <Card.Text>{this.state.count}</Card.Text>
            <Button variant="danger" onClick={this.incrementCount}>Increment Count</Button>
          </Card.Body>
        </Card> */}
        <DisplayCard cardTitle={'My Counter Component'} display={this.state.count} callback={this.incrementCount} buttonText={'Increment Count'} />
      </div>
    );
  }
}

export default App;
