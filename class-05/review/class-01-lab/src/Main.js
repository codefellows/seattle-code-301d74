import React from 'react';
import HornedBeast from './HornedBeast.js';
import Data from './Data.js';
import HornSearch from './HornSearch.js';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      hBArray: Data,
      searchHorn: 0,
    }
  }

  filterData = () => {
    const filterBeasts = (beast) => {
      if (beast.horns === this.state.searchHorn) {
        return true;
      }
      return false;
    }

    if (this.state.searchHorn) {
      this.setState({ hBArray: this.state.hBArray.filter(filterBeasts) });
    } else {
      this.setState({ hBArray: this.state.hBArray });
    }
  }

  handleHorns = (e) => {
    let searchValue = parseInt(e.target.value);
    this.setState({ searchHorn: searchValue }, this.filterData);
  }

  render() {
    // JS can go here
    return (
      <div id="Main">
        <HornSearch
          // Insert any props values here
          handleHorns={this.handleHorns}
        />
        {/* Display list of data items here as cards */}
        {this.state.hBArray.map(item => {
          return <HornedBeast
            key={item.title}
            src={item.image_url}
            title={item.title}
            alt={item.keyword}
            description={item.description}
            hBArray={this.state.hBArray}
          />
        })}
      </div>
    )
  }
}

export default Main;