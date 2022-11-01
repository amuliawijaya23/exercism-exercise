const { dayRate, daysInBudget, priceWithMonthlyDiscount } = require('../freelancer-rates');
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

describe('#daysInBudget', () => {
  it('Returns number of working days given a budget and hourly rate', () => {
    const expectedResult = 30;
    assert.strictEqual(daysInBudget(4800, 20), expectedResult);
  });
  it('Returns the number of days rounded down to nearest whole number when result is a decimal', () => {
    const expectedResult = 33;
    assert.strictEqual(daysInBudget(12250, 45.2), expectedResult);
  });
});

describe('#priceWithMonthlyDiscount', () => {
  it('Returns rate for large project given hourly rate, number of days, and monthly discount rate and rounded up to nearest whole number', () => {
    const expectedResult = 97972;
    assert.strictEqual(priceWithMonthlyDiscount(89, 230, 0.42), expectedResult);
  });
});