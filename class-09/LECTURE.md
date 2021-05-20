# Class 09: Code Quality

## Warm Up

* See warm up folder

## Shred: Object Iteration

Iteration???

* Looping through something, look at things inside of data structures and perfrom a task.
  * doing so progamatically.

Arrays have built in iteration methods: array.forEach()

3 ways of an iterating through an object:

* For in loop

```javascript

let person = {name: 'jacob', age: 31}

// property is  variable that will be each property in `person`
for (let property in person) {
  person[property] // 'jacob' , 31
}
```

* the JS Object constructo contain methods for extracting data from objects:
  * Object.keys(person) // ['name', 'age'];

```javascript

let person = {name: 'jacob', age: 31}

let keys = Object.keys(person); // ['name', 'age'];

keys.forEach(key => {
  person[key] // 'jacob', 31
});

// a little concisely
Object.keys(person).forEach(key => {
  person[key] // 'jacob', 31
});

```

* Object.values, just the inverse of Object.keys

```javascript

let person = {name: 'jacob', age: 31}

Object.values(person) // ['Jacob', 31]

Object.values(person).forEach(value => {
  value // 'Jacob', 31
});

```

* Object.entries, this returns both key and value as an array with 2 index values: [key, value]

```javascript

let person = {name: 'jacob', age: 31, skills: ['roller blading', 'cooking', 'swimming']}

Object.entries(person);
/**
 * [
 *  ['name', 'jacob'],
 *  ['age', 31],
 *  ['skills',
 *    ['roller blading', 'cooking', 'swimming]
 *  ]]
**/
```

## Code Review

Let's discuss what our app has become this week point out some features.

* City Explorer
  * Quentin: what is city explorer trying to do?
    * input that lets you search for a city.
      * gives you location data [lat, lon, details]
      * gives you an map image [png]
    * Peyton: weather forecast data, movie data.
    * Displays all this data to the user.
* How does application achieve / implement these features?
  * Client app contains forms and display components
    * client app can make requess to the server
  * Server app handles requests and data control for clients
    * server makes requests to cloud API services in order to fetch live data.
  * Third Party APIs need keys and validation to know who is making requests for it's data.

Thanks Peyton!!

Frontend 
Backend:

## Refactoring / Modularization

### Refactoring

As well build and features start to work, we may ask ourselves can it work better?
 *  does our function well as a sum of its parts?
    *  do out functions do a lot of work?
    *  Is there an code block that is really hard to read?
 *  Handling promises and callback using try catch blocks
    *  capturing is very beneficial to the user experience.

```javascript

try {
  axios.get(url)
} catch(e) {
  // any runtime error has the chance to be hanled gracefully.
}
  
```

## Modularization

Can we break out project up into discrete pieces.
  * AS we describe the features of our app?
    * Maybe it's a good idea to place to features in their file / subdirectory.
    * We want to break down our application into atomic unit ( the smallest piece of useful functionality ).
