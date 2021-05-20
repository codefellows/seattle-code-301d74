'use strict';
const axios = require('axios');

async function callAPI(url, handleError) {
  try {
    let result = axios.get(url);
    return result.data;
  } catch (e) {
    handleError(e);
  }
}

module.exports = callAPI;
