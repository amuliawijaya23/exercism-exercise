const { dayRate } = require('../freelancer-rates');
const assert = require('chai').assert;

describe('#dayRate', () => {
  it('Returns an 8 hour work day rate given an hourly rate', () => {
    const expectedResult = 160;
    assert.strictEqual(dayRate(20), expectedResult);
  });
  it('Day rate not rounded to a fixed precision', () => {
    const expectedResult = (8 * 45.2);
    assert.strictEqual(dayRate(45.2), expectedResult);
  });
});