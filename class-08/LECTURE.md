# Class: 08

## Warm up

See warm folder [Warm Up](./warm-up/warm-up.md)

## Code Review

See review folder [Review](./review)

## Shred Talk: Regex

Regular Expressions, a methodology / langauge for matching patterns in strings

* `Jacob Knaack` is this someones name?
* `jacob@codefellows.com` is this an email address?

For us JS devs, regex help us validate forms, check fro anomalies in strings.

* What is a pattern
  * anything between two forward slashes: /pattern/ - searches for the string "pattern"
  * "Here is a sentence with a pattern, perhaps 2 patterns" /pattern/ => pattern
* Modifiers
  * a character placed at the end of a pattern to an aspect of the pattern
    * g - globally look for this pattern
      * `/pattern/g` - look for all matches of the pattern
    * i - case insentive, ignore casing with searching.
* Range of Characters
  * /[A-Z]/ - uses square brackets and a dash to signify a range of things
  * /[a-z]/
  * /[0-9]/
* Groups: looks for clump of characters together
  * /(ain)/ : looks for the characters "ain" together.
* Quantifiers
  * Typically {} with a number denotes a number of times a preceding pattern is repeated
    * /[a-z]{2}/ - find 2 lowercase characters next to each other.
  * `?` - find zero or one occurance of the preceding pattern
  * `*` - greedy, keep going to find occurances, zero or more times.
* helpers: speciall characters, things like spaces, words, word boundaris all have special "helpers" that regex can use to identify them in a pattern.
  * `\s` : looks for a space
  * `\w` : looks for word
  * `\b` : word boundaries.
  * `^` : the beginning of your string.
  * `$` : the end of your string.
  * `.` : any character.
* JS Methods
  * string.match(/pattern/) // returns an array of any matches.
  * string.replace(/pattern/, string | callback function)

Breakout rooms: make some regex that matches a phone number: 111-222-4444

## Calling APIs from our Server

Our server is our hub for our react app, as such we should do all the heavy on the server.  So if we need lots of data for weather, location, rstuarants, movie times, we may want our server to do more of the work instead of our React App.

* APIs: we need keys, create an accounts on their platform.
