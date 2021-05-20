import React from 'react';

class RenderImage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="header">
        <img src={this.props.img} alt={this.props.img} />
      </div>
    );
  }
}

export default RenderImage;
