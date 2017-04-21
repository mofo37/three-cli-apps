'use strict';

const averageOf = require('./avg');
const numbers = [];
const args = process.argv.slice(2).map(function(x) {
  numbers.push(parseInt(x));
});
const result = averageOf(numbers);
console.log(result);
