import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      // HTML || JSX
      // <div><p>test</p></div>
      // <h1>Heres my header</h1> this is rendering 2 chidren, react requies each component to only render 1.
      <div>
        <h1>Heres my header</h1>
      </div>
    )
  }
}

export default Header;
