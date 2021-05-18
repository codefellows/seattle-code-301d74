# Class 03: Passing Functions as Props, Importing Things

## Warm Up

* See warm up folder.

## Array.prototype.filter

Returns a new array, with some items from the current array filtered out of the new array.

```javascript

const family = [
  {name: "Jim", role: "dad"},
  {name: "Mary", role: "mom"},
  {name: "Timmy", role: "kid"}
]

// Pass a callback function, that provides a 'test' for each array item to pass, if function returns true item will make it into the new array

const kids = family.filter((member) => {
  if (member.role === 'kid') {
    return true;  // true ends up in new array.
  }
  return false; // false gets filtered out.
});

// kids === [{name: "Timmy", role: "kid"}]

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

// evenNumbers === [2,4,6,8];

```

## Review

* Code Challenge
  * Test Driven Development
* React: Using state for seperate components
  * Taking a bunch of Objects from a json file, and plopping them into React.
  * Getting Votes to be tracked via user clicks.

* Why do we use .map instead of forEach?
  * .map - this affects and returns a new array.
  * .forEach - does something but does not return anything new.
* What is "state"?
  * stores data within a component, managed by that component.

## Passing Function as Props

* We covered this very briefly yesterday, but now we will looks more in depth why this is so important.
  * Parent components manage their own state using `this.setState`
  * In order to give children the same power we need to excapsulate this into a component method and pass down to children.

```javascript

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      search = '',
    }
  }

  setSearch = (value) => {
    this.setstate({ search: value });
  } 

  render() {
    return(
      <div>
        <p>{this.state.search}</p>
        <Child setSearch={this.setSearch}/>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.setSearch(e.target.search.value)}>
        <input name="search">
        <button>Submit</button>
      </form>
    )
  }
}

```
