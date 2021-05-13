import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // for each beast that comes in on props.data, we need a HornedBeast Component;
    return (
      <div id="main">
        {this.props.data.map(item => {
          return <HornedBeast
            image_url={item.image_url}
            title={item.title}
            description={item.description}
            keyword={item.keyword}
            horn={item.horns}
            selectBeast={() => this.props.selectBeast(item)}
          />
        })}
      </div>
    )
  }
}

export default Main;
