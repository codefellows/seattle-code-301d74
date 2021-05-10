# Class 01: Course Overview

## Course Specifics

Everyday there will be around 4 things you should do:
  * Readings: due before the class they are assigned to
    * EX: reading 01 is due before class 01.
  * Lab: due before midnight each day.
  * Code Challenge: every afternoon one will become available and should be done before the next class.
  * Career Coaching: Every week / module there will be a couple career coaching assignments.

## Code Challenge

Meant to keep you practicing fundamentals, design patterns, a technologies that real devs.
- Link here to demo [`data-structures-and-algorithms-1](https://github.com/JacobKnaack/data-structures-and-algorithms-1)

## Shred Talk

Everday we introduce new JS design patterns / methods.  Directly relate to the Code Challenge of the day.

JS `array.forEach` method??

- This is a descriptive way of running a for loop.
  - semanctic term that describes whatt the code does.

```javascript

let array = ["bird", "dog", "cat"];

// generic for loop
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for each item in array, perfrom the console.log function.
array.forEach(console.log);

array.forEach((item) => {
  console.log(item);
  alert(item);
});

function iterateAndDo(item) {
  console.log(item);
  alert(item);
}

array.forEach(iterateAndDo);

```

## Review Prework

* ES6 Classes:
  * Template for creating objects.
  * In 201 we spent quite a bit of time discussing constructors
  * classes are exactly the same thing, but the syntax has been updated so that it seems like JS is a more OOPish language.

```javascript

// constructor for an animal
function Animal(name) {
  this.name = name;
  this.type = "animal"; // contextual this: refers to the object the constructor is creating
}

Animal.prototype.speak = function () {
  console.log(this.name);
}

/************/

class Animal {
  constructor(name) {
    this.name = name;
    this.type = 'animal';
  }

  // this does not reference the Animal constructor or class, but the instance of animal
  speak() {
    console.log(this.name);
  }
}

const sparky = new Animal('sparky'); // { name: 'sparky', type: 'animal' }
sparky.speak(); // "sparky"


class Cat extends Animal {
  constructor(name) {
    super(name); // this is a 'magic' function that exists in js classes to pass info into the class that it is extending.
    this.fur = 'fuzzy';
  }
}

const mittens = new Cat("Mittens"); // { name: undefined, type: 'animal', fur: 'fuzzy' }

```

* Arrow Functions

Updated function syntax, that does not the `function` keyword, but instead a `=>`

```javascript

// function keyword
function myFunc(param) {
  // do the things.
}

// fat arrow
() => {
  // no implicit binding of 'this'
  //  'this' is now defined by the outside context of the function.
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name);
  }

  walk = () => {
    // this
  }
}

function one() {
  // this refers to just the inner runtime context.
}

function two() {
  // same here
}

//********** //

const one = () => {
  // this will be the same as "two"
}

const two = () => {
  // this will be the same as "one"
}
 
```

## React and Component Based Architecture

What is React?
 * UI library
   * Used to create user interfaces.
 * Designed with a idea of atomic components in mind.
What are Component?
