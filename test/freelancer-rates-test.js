const { dayRate } = require('../freelancer-rates');
const assert = require('chai').assert;

describe('#dayRate', () => {
  it('Returns an 8 hour work day rate given an hourly rate', () => {
    const expectedResult = 160;
    assert.strictEqual(dayRate(20), expectedResult);
  });
  it('Day rate not rounded to a fixed precision', () => {
    const expectedResult = 361.6;
    assert.strictEqual(dayRate(45.2), expectedResult);
  });
  it('Returns 2 decimal result given a 2 decimal hourly rate', () => {
    const expectedResult = 97.84;
    assert.strictEqual(dayRate(12.23), expectedResult);
  });
});

