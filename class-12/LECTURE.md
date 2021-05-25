# Class 12: Mongo and the Data Layer

class 12 Whiteboard: https://projects.invisionapp.com/freehand/document/hIAULkE1c

## Warm Up

See warm up folder

## Code Review

* Breakout Rooms
  * front end group
    * build a React Form component
      * includes one search input
      * send a request to a local server at `/books?search=${input-from-form}`
        * request should be able to include a authorization header.
          * should be able to attack a token via a parameter.
  * back end group
    * Create a Book constructor / class
      * title: string
      * author: string
    * One express route `/books`
      * grab a value from the request query parameters.
      * validate the auth header.
        * depending on whether the auth header is valid or not
          * send back a 200
          * send back a 401

* Alex: BrowserRouter to /profile.
  * conditional rendering of components via authentication.

## Mongo and Databases

Database? Persisted storage, any information the user needs will last as long as the user doesn't remove it.
* Data that is persisted needs special thought and care.
  * As the user uses the app, they are performing database operations.

How to think about data? how to `model` (what key value pairs does our application need) data?
* everytime we create a class or constructor.

## NoSQL database called Mongo

* Mongo stores all of it's data in what is they call a `document`.
```json

{
  "users": [],
  "books": [],
}

```

* what does our data look like, keys and data types?
  * what data do we want on a persisted book?
    * title
    * author
  * What data do we want on a persisted User?
    * username
    * !password? / never this
    * email

### Database Operations

CRUD: create, read, update, delete

* Create: creating something from required values and persist
* Read: query the db for data, and read me the details.
* Update: Looks for an existing values, and updating some or all of those fields.
* Delete: finding something that exists, and removing data from the DB.

## Mongoose

* Bridge the gap between data and JavaScript

* Connect to a mongo db instance.
* Create models for the DB to use
* Perform CRUD.

