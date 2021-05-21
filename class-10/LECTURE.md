# Class 10 Data Persistence

## Announcements

* In one week: final exam / project week prep.
  * Final Exam content:
    * using some starter code, to complete a feature in a full stack app.
    * React Components
      * props
      * state
      * Parent / child relationship
    * Express and Node
      * route handlers (functions you give to express)
        * request
        * response.
      * client / server
      * Connecting to a database.
    * Async Code
      * Promises / callback / async await.

## Warm Up

* see warm up file.

## Shred: Nested Loops

What is a nested loop: a loop that starts in the middle of another loop:

```javascript

let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i ++) {
  for (let j = 0; j < numbers.length; j ++) {
    // the operation we want to perform
    console.log('we looped!!!');
  }
}
```

Why would you do this?

* 2 dimensional arrays are a thing: `[[1,24,5], [1,45,70, 100], [2,35,746, 500, 138], [2]]`
* We need to make each item in the array aware of every other item.

```javascript

let people = ["Jacob", "Chance" ,"Hexx", "Kristian"];

function shakeHands() {
  for (let column = 0; column < people.length; column ++) {
    // set handshaker
    let handShaker = people[column];

    for (let row = 0; row < people.length; row ++) {
      let personToShakeHandsWith  = people[row];

      if (handShaker !== personToShakeHandsWith) {
        console.log(handShaker + ' shook ' + personToShakeHandsWith + '\'s hand');
      }
    }
  }
}

shakeHands();
```

## Code Review

2 teams: front and back end.

* Small full stack app: let's a user search the pokeapi.
  * Front end : form, and some display components.
    * Form with one input: pokemon name.
    * Component that can display a pokmeon object (define from the backend).
  * Back end : route handling function, Pokemon class.
    * have one express route: `/search`  has one query parameters: `?pokemon=<pokemonname>
      * respond with a `Pokemon`
    * Sends a request to `https://pokeapi.co/api/v2/pokemon/<pokemon-goes-here>`
    * define a pokemon class:
      * name: string
      * abalities: array
      * stats: array

## Data Persistence

If we want our data to live in our server for longer than the time is takes to make a request, we can store in a data structore of our choosing:

* pro,  if a user has already searched for this data, we can just pass that previous result back vs making another HTTP request.
* con, not super fresh. We need a away to invalidate our storage. (based on time).
  * when is fresh data prioritized.

* using in-memory storage: {}
  * each feature of our app will get a key, the value being data fetched from a server.
* Whenever the node process in our terminal is ended, we lose all the data.
