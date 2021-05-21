# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
'use strict'; // do we need this? not really

const express = require('express');

const app = express();

// we need this slash to tell express that we have a route.
app.get('/username', (req, res) => {
  const userInfo = {};

  userInfo.name = req.query.username; // this data probably comes form the request query parameters
  userInfo.password = req.query.password;

  // response.send(info) // 'info' is undefined???
  res.json(userInfo); // better to specify 'json' as our return type.
})

// we need a port
app.listen(3000, () => console.log("Listening on Port 3000"));
```
