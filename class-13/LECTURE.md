# Class 13

[Class Whiteboard](https://projects.invisionapp.com/freehand/document/5FpDpcY5X)

## Announcments

* Project Week (prep) starting this friday
* Exam will be Friday
  * 4 hours.
  * It will occur during lecture time on Friday.
  * front end and backend tasks.
    * Come with some stater code.
    * Debugging.
      * Starter code will come with test, getting tests to pass.
    * Feature building.
      * Test for the features you are to implement.
  * You will be able to retake.
  * Open resource exam.

## Warm Up

React App:

* state in constructor uses improper objeect literal syntax.
* No return in the render.
* this.name !== this.state.name
* It looks like we trying to create and aray for, but we aren't really.
* this.hadBirthday: this.setState(age: this.state.age + 1) => this.setState({ age: this.state.age + 1});
* Reset age in this.state to initiall equal a number preferably.
* Call `super()` before we use `this` in the constructor.
* change `pets` to `pet` in the forEach loop.
  * switch .forEach to .map in order to have and array as a return value (forEach does not return anything)
  * add `return` right before `<li>{pet}</li>`

## Code Review

Front End: Keian
Back End: 

* Conceptual review just for the servers this week!

## API / CRUD

HTTP API and systematically perfroming CRUD

New HTTP routes that let user perfrom CRUD that we allow.

Feature of a bookshelf:
Bookshelves:

* Ordering books (sorting)?
  * Updating (sort the books array)
* Add a book?
  * Creating a new Book model, and placing in our Users book array
* Remove a book?
  * tell me what book you want removed and we can delete it from the User model.
* Search for a single book?
  * Tell me how to identify a book, and I can search for it.
* Have I read this book?
  * Search for the book in the user book array, and modify that single book.

We probaly want a route for each of these things in order to let our data layer know that different operation need to be performed.

* Our HTTP server is an interface for other machines.
  * Systemcically do mongoose stuff depending on data sent from clients.

* HTTP GET `GET /books`
  * always correlate to READ.
* HTTP POST `POST /books`
  * always correlate to CREATE.
* HTTP DELETE  `DELETE /books`
  * alawys to a DELETE

Express has differnet of attaching data to requests

* request query string: `/books?key=value&anotherKey=anotherValue`
* sending a json body: `POST /books` append json to this request `{title: 'name', keywords: ['sci fi', 'violent']}`
* request route parameters: `GET /books/:bookId` => `/books/938748ahuya6efdc`
  * request.params.bookId.
