import React from 'react';
import HornedBeast from './HornedBeast.js';
// create react app has a plugin that lets this work just fine.
import data from './data.json';
// import data from './data.js';
import Input from './Input.js';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      keyword: 'default',
    }
  }

  // this sets the keyword state property
  updateKeyword = (word) => {
    // state properties live on a component?
    this.setState({ keyword: word });
  }

  render() {
    return (
      <div id="main">
        <p>Current keyword:  {this.state.keyword}</p>
        <Input updateKeyword={this.updateKeyword} />
        {/* any js operation in this return should return some HTML / JSX / Component that you made */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.state.data.map(beast => <HornedBeast updateKeyword={this.updateKeyword} key={beast.title} image_url={beast.image_url} keyword={beast.keyword} horns={beast.horns} title={beast.title} description={beast.description} />)}
        </div>
        {/**
         *  [<img/>, <img/>, <img />, ... ]
         */}
      </div>
    )
  }

}

// things that are exported like so, can be brought into other files.
export default Main;
