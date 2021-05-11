import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props); // pass props to React
  }

  render() {
    return (
      <div id="header">
        { /* we get component info off of 'this', if props, pass props into super */}
        <h2>{this.props.title}</h2>
        <p>I am a child of App</p>
      </div>
    )
  }
}

export default Header;
