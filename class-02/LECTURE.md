# Class 02: Component State and Props

## Warm Up

look at some code, what does it do.

## Code Review

* Code Challenge: using callback.
  * See challenges folder.
* Lab stretch goal, using a loop to render components?

## Shred Talk

Array.prototype.map:  prototype tells us that we run this method on an array

- very similar to forEach, the difference being that .map returns a new array.

```javascript
let array = ['Jacob', 'chance'];

// we can create a new version of the same array data, without modifying or mutating the original.
const newArray = array.map((item) => {return item.toUpperCase()}); // ['JACOB', 'CHANCE'];


const people = [
  {name: 'jacob', role: 'instructor'},
  {name: 'chance', role: 'ta'}
]

const names = people.map(person => {
  return person.name;
});
// names == ['jacob', 'chance'] 
// people == [{name: 'jacob', role: 'instructor'}, {name: 'chance', role: 'ta'}]

const numbers = [1,2,3,4,5]; // [1, 4, 9, 16, 25];

function square(number) {
  let multipliedNumber = number * number;
  return multipliedNumber;
}

numbers.map(square);
```

## State And Props

React uses these to track information between components.
State: any data that a component needs to work properly.
  - When we render things in React, the user may want to interact with them and changee the state of your component.
  - Use the component method this.setState to update state values and rerender data to the webpage.

```javascript

class StateComponent extends React.Component {
  constructor() {
    super();
    // React would really appreciate this property assigned to the component for important data.
    this.state = {
      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    }
  }

  handleHorns = () => {
    this.setState({horns: this.state.horns + 1}); // this willl trigger a rerender and new values will appear automaticaly.
  }

  render() {
    <div>
      <Hornedbeast src={this.state.image_url}> 
    </div>
  }
}


```

## Third Party React Components

- Installing Node Modules
  - `npm install <library-name> <another-library>`
- Using React Bootstrap.

## Deployment!!

Our react can run (hopefully) run just fine locally.  How do we let the whole world see out work!
* Netlify: allows us to deploy static react code.
  1) have a deployable create-react-app project in a github repository.
  2) Sign in / Sign up on Netlify.
  3) Add a new site from git.
     1) First Time: grant netlify access to your github repositories.
     2) Select the appropiate Repo from github.
     3) confirm the build script and the folder that build files will go into.
  4) Wait for build to finish.
