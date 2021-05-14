# Class: 05 Web Request Response Cycle

## Warm Up

See warm up folder[warm-up.md](https://github.com/codefellows/seattle-code-301d74/blob/main/class-05/warm-up/warm-up.md)

## Array.prototype.reduce

What is reduction?? / reducing

* Taking a data structure and drastically changing the shape.
* Uses the current array, a function, and a data structure / type.
  * Function returns data into the data structure we define.

```javascript

let numbers = [0,1,3,4,5];

// accumulator (new structure as it changes)
let sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(sum); // should be 13

let people = ['jacob', 'chance', 'hexx'];

let peopleObj = people.reduce((acc, person) => {
  acc[person] = person.toUpperCase();
  return acc;
  // {'jacob': 'JACOB'}
  // {'jacob': 'JACOB', 'chance': 'CHANCE'}
  // {'jacob': 'JACOB', 'chance': 'CHANCE', 'hexx': 'HEXX' }
}, {});

console.log(peopleObj);

let people = [
  {name: 'Jacob', age: 31},
  {name: 'Chance', age: 38},
  {name: 'Hexx', age: 28},
]; // 107?

people[0].age // 31
people[1].age // 38
people[2].age // 28


// use people.reduce to return the total ages of all people.
people.reduce((numberToAddTo, arrayItem) => {
  let value = arrayItem.age + numberToAddTo;
  return value;
}, 0);

```

## Code Review

* Student Gallery of Horns!  What did ya'll create?
* Thanks Keian!!

## Conditional Rendering / Browser Router

* We can use JS expressions to tell our react to either render or not render specific components / JSX.

Our JSX is perfectly fine with running JS expressions in our render method

```javascript

render() {
  // this.props.hide
  if (this.props.hide) {
    return () // any component you want rendered
  } else {
    return null;
  }
}

/************/

// ternary expression to decide what to do within my return
// return condition ? true : false
render() {
  return this.props.renderComponent1 === true ? <Component1> : <Component2>
}

```

### Browser Routing

React is known for creating single page application, or SPA??

* There is only one webpage (index.html) and this is difficult for applications that could really use 'routes' that return multiple HTML pages.
  * Views are selected based on a path in our URL bar.
* BrowserRouter library lets us conditionally render based on a path in our URL bar.
  * Instal with npm: `npm install react-router-dom`
  * Import components from `react-router-dom`

See demo folder for conditional render blocks and BrowserRouter components!

## WRRC / Lab Prep

The process that clients and server go through when making an HTTP request.
* The cycle
  1) A client ( a computer that needs something ) makes a `request` to a server.
     a) request: {method, protocol, data}
  2) The server ( a computer that is set up to handle requests ) receives that `reqeust` and performs something.
     a) putting data in a database.
     b) searching for data.
     c) another web request.  
  3) The server sends back a `response` to the client.
     a) response {sender, headers, data}
* The `request` and the `response` are dicreet things.

Our React application are going to hav less static data next week.
- We are going to request data from server.
- We are also going to buld our own server with Node.

### Creating a Portfolio

* Using Argon Design System
