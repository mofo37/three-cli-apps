'use strict';

function averageOf(numbers) {
  var sum = numbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);

  return sum/numbers.length;
}

module.exports = averageOf;