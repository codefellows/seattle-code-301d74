import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import beasts from './data.json';
import ModalHorn from './ModalHorn.js';
import Main from './Main.js';
import BeastForm from './BeastForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: beasts,
      selectedBeast: {},
      searchTitle: '',
    }
  }

  selectBeast = (beast) => {
    this.setState({ selectedBeast: beast });
  }

  setSearch = (search) => {
    this.setState({ searchTitle: search }, this.filterData); // we are running the filterData method as a callback.
  }

  filterData = () => {
    const filterBeasts = (beast) => {
      // filter our array based on a title
      console.log(beast.title, this.state.searchTitle);
      if (beast.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())) {
        return true;
      }
      return false;
    }

    if (this.state.searchTitle) {
      this.setState({ data: this.state.data.filter(filterBeasts) });
    } else {
      this.setState({ data: beasts });
    }
  }

  render() {
    console.log(this.state.searchTitle);
    return (
      <div className="App">
        <BeastForm setSearch={this.setSearch} />
        <Main data={this.state.data} selectBeast={this.selectBeast} />
        <ModalHorn selectedBeast={this.state.selectedBeast} />
      </div>
    );
  }
}

export default App;
