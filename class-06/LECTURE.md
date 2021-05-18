# Class 06: Asynchronous Code / City Explorer

## Announcement

* Feedback from last week
  * Last week was fast paced.
    * Break things down a litle more measured.
  * More Visuals
    * More than 1 one way to visualize.
    * Get feedback on visuals.
  * HTML / CSS / JS => React is large leap.
* Great thngs to TAs and instructional staff.

## Warm Up

## Shred talk

Pass By Reference vs Pass By Value

* Defining variables in javascript produces differnent depending on the type getting assigned to that varibale

```javascript

// this is of type string
const name = 'Jacob';

// immutable types / primitive types??
// string, number, boolean, null, undefined

// this is an array
const array = [1,2,3,4];

// there are also compound
// objects, array, functions.

```

* Primitive variable types are passed by value.
  * You can do whatever you want to that string, ,and the original variable will be fine.

* Compound variable types are passed by referenc
  * If you do something to he new variable, it will change the original;.

```javascript

let names = ['Jacob', 'Change'];

let people = names;
let people = [...names]; // this works for copying!!

people.push('Hexx');
console.log(names, people);

// ['Jacob', 'Chance', 'Hexx'] , ['Jacob', 'Chance', 'Hexx']

let name = 'Jacob';

let person = name;

person = 'Hexx';
console.log(name, person) // these will be different because primitives copy their value and assign to a new variable.


let person = {name: 'Jacob'}

// passing the contents of a compound data type into a newee variable.
let instructor = {...person};

// constructor
let skills = ['skating', 'coding'];

class Person {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;
  }
  speak = () => console.log(this.name);
  updatedSkills = (skill) => this.skills.push(skill);
}

let Jacob = new Person('Jacob', skills);

let jacobReference = Jacob; // These variables will point at the EXACT same thing.
```

### Review

What are the immutable / primitive types?
  
* string, number, null, undefined, boolean

What does it mean to be passed by value?

* Any variable assigned to another, and the other variable is one of the immutable types, a copy of th value will be made, and placed into the new variable.

What does it mean to be passed by reference?

* Any variable assigned to another, and the other variable is NOT an immutbale type, a pointer / refernce to the original is made, and placed into the new variable.

## Async Code

Before today, every line of code that followed another line code, will be executed AFTER the line above has completed it's operation

```javascript

let people = students.filter(filterStudents);
console.log(people); // this will show a new array, with a filterd people array.

/*****/

let people = fetchFromDatabase();
console.log(people) // undefined, null, Promise Pending
// We have to wait until  fetchFromDatabsase completes before we can do anything with people.

```

Asynchronous Code: any operation that JS doesn't want to slow down th User experience.s
  * Web Request: relies on another machine to complete a task and send us a respons.

### Callbacks and Promises

Callbacks we've been using and the goal is to provide a function to run when the original operations completes

```javascript

this.setState({count: this.state.count + 1}, () => console.log(this.state)); // this space is dedicated for a callback.
  // Functions that take callback are specified that they required a callback / can use a callback in the documentation.
// console.log(this.state);

```

Promise is very similar, but let's us also define a function for handling errros, doing something when things break.

```javascript
// .then takes a function to perfrom when things go well.
// .catch takes a function to perform when thiings go wrong.
axios('https://google.com)
.then((results) => {
  // pyramid of doom.
  axios(results.url).then(() => {

  }).catch(error => {
    alert(error);
    console.log(error);
  })
}).catch(error => {
  alert(error);
  console.log(error);
});


```

Async Await Syntax: syntactic sugar (does the exact as promise syntax) for promises, let's use the keywords `asyn` and `await` to handle code that might need a while to complete

### API:  Application Programming Interface

Any programmtic interface for another perhaps more compicatd system.

HTTP REST API

```javascript

async function fetchData() {
  let results = await axios('https://google.com');
  console.log(results);
  return results;
}

```

## City Explorer
