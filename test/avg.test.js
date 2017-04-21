'use strict';

const assert = require('assert');
const averageOf = require('../avg');

describe('average of', () => {
  it('returns average of all supplied values', () => {
    const avg = averageOf([1,2,3]);
    assert.equal(avg, 2);
  });
});

