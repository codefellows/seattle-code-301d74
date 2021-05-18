# Class 07: Express Servers

## Announcement

* Instructor syncs:
  * Fill our a form and let's chat!

## Warm Up

see warm up folder

## Array / String Concatenation

Manipulating the size and contents of strings and arrays

* slice: creating a sub-array, taking a starting and ending index.

```javascript

const letters = ['a', 'b', 'c', 'd'];

const firstHalf = letters.slice(0,1);
console.log(firstHalf, letters);

```

* splice: Inserting and / or removing elements from an array, will alter the original.
  * 3 params;

```javascript

const letters = ['a', 'e', 'f', 'g'];

letter.splice(1, 0, 'b', 'c', 'd');
console.log(letters);

```

Excercise:

```javascript

let names = ['Jacob', 'Chance', 'Hexx', 'Aliya'];

// use slice method to create a new array with "jacob" removed from this array, and return everything else.

names.slice(0,1) // what index values do we want? => ['Jacob']
names.slice(1,4) // ['Chance', 'Hexx', 'Aliya']; wait we only have up to index 3 in this array.

// use splice add 'Kristian', after 'Jacob' without removing any other items.

names.splice(1,0, 'Kristian'); 

```

* join:  Creates a string from array index values

```javascript

const words = ['I', 'am', 'a', 'sentence'];

console.log(words.join(' ')); // 'I am a sentence';

```

* split: take a string and devide its characters into an array, takes a delimiter or a characters or set of characters to make new items:

```javascript

let string = 'Jacob';

console.log(string.split('')); // ['J','a', 'c', 'o', 'b'];

```

Exercise:  Modify a sentence!

```javascript

const sentence = 'one plus equals two'; // hint: 'one'

// break this up into an array of words and reassemble!

const words = sentence.split(' '); // turn our string into an array of words

// ['one', 'plus', 'equals', 'two' ]
words.splice(2, 0, 'one') // splice in a values that we went into tha array

// joining everything back together
console.log(words.join(' '));
// one plus one equals two 


// we can one liner this
// sentence.split(' ').splice(2, 0, 'one').join(' ');
```

## Code Review

Creating our City Explorer Front ends

* Sending an HTTP request to location IQ
* Display location data to the user
  * Application state is updated with location IQ data.
* Display map data, requests map image from location IQ.

## Node and Express

Why make a server to do the same thing as before
  * Security, everthing that runs in the browser is visible.
  * data control, scalabity.

### Node

Create react app uses node to build our HTML CSS and JS, also open a teeeny web server to serve HTML CSS and JS.

`node` command run in the termina lets use run any javascript within the Node runtime.
  * require() - our new way of importing libraries and Node modules.   

## Lab Prep
