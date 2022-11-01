const { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner } = require('../annalyns-infiltration');
const assert = require('chai').assert;

describe('#canExecuteFastAttack', () => {
  it('should return false if knight is awake', () => {
    assert.strictEqual(canExecuteFastAttack(true), false);
  });
  it('should return true if knight is asleep', () => {
    assert.strictEqual(canExecuteFastAttack(false), true);
  });
});

