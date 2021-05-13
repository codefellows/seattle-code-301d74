# Class 04: React and Forms

## Warm Up

- Spot the errors in the React Components!
- See warm up file: [warm-up.md](https://github.com/codefellows/seattle-code-301d74/blob/main/class-04/warm-up/warm-up.md)

## Array.prototype.sort

- Take a array and reorder the items in the array, based on a compare function.
  - This mutates the original array, sorting "in place".
- the compares function needs to return 1 of 3 options:
  - the functions receives just 2 items:
    - return -1 , the first parameter gets placed ahead of the second.
    - return 1, the first parameter get's places behind the second.
    - return 0, they stay in the same spot.

```javascript

const numbers = [1,2,3,4,5]; // sort larger number ahead of smaller numbers. [5,4,3,2,1];

numbers.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
});

console.log(numbers) // [5,4,3,2,1]

let people = [
  {name: 'Jacob', age: 31},
  {name: 'Chance', age: 38},
  {name: 'Hexx', age: 28},
]

// how to sort these object from youngest to oldest...
const age = [
  {name: 'Jacob', age: 31},
  {name: 'Chance', age: 38},
  {name: 'Hexx', age: 28},
];

function compareAges(a, b) {
  age.age
  if (a.age < b.age) {
    return -1; // place a ahead of b
    } else if( a.age > b.age ) {
    return 1; // places a behind of b
  } else {
    return 0;
  }
}
age.sort(compareAges);
age.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if( a < b ) {
    return 1;
  } else {
    return 0;
  }
});

```

- Refresh on .filter
- Creates a new array with certain items filtered out of an existing array:

```javascript

let people = [
  {name: 'Jacob', role: 'Instructor'},
  {name: 'Chance', role: 'TA'},
  {name: 'Hexx', role: 'TA'},
] // filter out any person that is not a ta?

// provide the method with a test function that returns true, false.

// should filter out any item that isn't a TA
const TAs = people.filter((item) => {
  if (item.role === 'TA') {
    return true;
  }
  return false;
});
console.log(TAs, people);

```

## Lab Review

1) What is a React Component?

- A giant class, that conains a render method that returns HTML like things.
- Holds data
- It's something you want to keep seperate from other pieces of code (modular / atomic).

2) What is component state?

- Any data that a component needs to hold.
- The opposite of props in that it is can be updated.
  
3) What is component props?

- Data that passed into a component (from parent to child)
- What a component is given when it's created.

Review Topic
- Passing Props, pass a function.
- Fuzzy Search
- Using Modals

## React Forms and Events

- See typed demo folder for form usage and descriptions.
