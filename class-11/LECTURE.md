# Class 11: Authentication

> [class 11 Whiteboard](https://projects.invisionapp.com/freehand/document/tcgd1Uxht)

## Warm Up

* See warm up folder

## Announcements

* Feedback
  * We are still moving fast.
    * pace is baked in, neck  brakingly fast.
    * Learn new things all the time (will be significatly slower).
  * Errors slowing down the demo process.
    * Live demonstration wil have times where there errors that take some time to solve / discover.
    * Take a break, take the pace down, and debrief when we return.
  * Trello boards
    * The wording is rough, these are designed to replicate the job tickets for work.
    * Spend some time looking at trello wording.
  * We should now exactly the end product of the lab.
    * Spend some time looks at the MVP goal for lab.
      * Diagram of the finished product.
      * Drawing of each system and how it works.
  * Lecture running long:
    * My goal is always to end things by 12:00.
    * Lecture will never go past 12:30, but if there you need for labs.
      * Afternoon sessions I want to avoid at all costs.
    * Quality over quantity (rushed ending).

## Review

* React: A library for creating UI components
  * A component:
    * renders some HTML / JSX
    * gets `props` passed in from a parent.
    * can use `state` to manage it's own values that are important.
* Express
* Node: A runtime for for JS.

## Authentication

Who are you?
* People are not computers, so answering is very difficult.
* login process: email, password.
  * Person != email ,password (strings)
Authentication != Authorization (Can you do what you want to do? Do you have access)

Why is this questions so important?
* Remember the inforamtion that a user gave us.
* As we let the user, ,perfrom operations on our app, we can associate that data with a specific user.

## OAuth

* Authentication via a third party.
* Authentication as a service:
  * Google, Facebook, Amazon, github...
    * Many people have profiles with these companies.
    * They allow third party app developeer to access user profile on beehalf of the user.
* Auth0, will also just manage a username and password, if you dont want to use on og these services.

## DEMO: Auth0
