const assert = require('assert');
const dayGreet = require('../lib/day-greet.js');

describe('day-greet', () => {
  it('greets a person', () => {
    const greeting = dayGreet('03:00', 'marty');
    assert.equal(greeting, 'good morning marty');
  });
});