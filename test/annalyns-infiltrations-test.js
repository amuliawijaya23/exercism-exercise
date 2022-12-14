const { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner } = require('../annalyns-infiltration');
const assert = require('chai').assert;

/**
 * Tests the canExecuteFastAttack function
 * takes the knightIsAwake parameter
 * returns a boolean
 */

describe('#canExecuteFastAttack', () => {
  it('should return false if knight is awake', () => {
    assert.strictEqual(canExecuteFastAttack(true), false);
  });
  it('should return true if knight is asleep', () => {
    assert.strictEqual(canExecuteFastAttack(false), true);
  });
});

/**
 * Tests the canSpy function.
 * takes the knightIsAwake, archerIsAwake, prisonerIsAwake parameter
 * returns a boolean
 */

describe('#canSpy', () => {
  it('should return false if everyone is asleep', () => {
    assert.strictEqual(canSpy(false, false, false), false);
  });
  it('should return true if knight is awake, archer and prisoner are asleep', () => {
    assert.strictEqual(canSpy(true, false, false), true);
  });
  it('should return true if archer is awake, knight and prisoner are asleep', () => {
    assert.strictEqual(canSpy(false, true, false), true);
  });
  it('should return true if prisoner is awake, knight and archer are asleep', () => {
    assert.strictEqual(canSpy(false, false, true), true);
  });
  it('should return true if knight and archer are awake, prisoner is asleep', () => {
    assert.strictEqual(canSpy(true, true, false), true);
  });
});

/**
 * Tests the canSignalPrisoner function
 * takes archerIsAwake and prisonerIsAwake parameter
 * returns a boolean
 */

describe('#canSignalPrisoner', () => {
  it('should return true if prisoner is awake and archer is asleep', () => {
    assert.strictEqual(canSignalPrisoner(false, true), true);
  });
  it('should return false if archer and prisoner are awake', () => {
    assert.strictEqual(canSignalPrisoner(true, true), false);
  });
  it('should return false if archer and prisoner are asleep', () => {
    assert.strictEqual(canSignalPrisoner(false, false), false);
  });
});

/**
 * Tests the canFreePrisoner function
 * takes knightIsAwake, archerIsAwake, prisonerIsAwake, and petDogIsPresent parameter
 * returns a boolean
 */

describe('#canFreePrisoner', () => {
  it('should return true if pet dog is present, knight, archer, and prisoner are asleep', () => {
    assert.strictEqual(canFreePrisoner(false, false, false, true), true);
  });
  it('should return true if pet dog is present, knight is awake, archer and prisoner are asleep', () => {
    assert.strictEqual(canFreePrisoner(true, false, false, true), true);
  });
  it('should return false if pet dog is not present, while knight, archer, and prisoner are asleep', () => {
    assert.strictEqual(canFreePrisoner(false, false, false, false), false);
  });
  it('should return false if pet dog is not present while knight and prisoner are awake, archer is asleep', () => {
    assert.strictEqual(canFreePrisoner(true, false, true, false), false);
  });
  it('should return true when pet dog is not present, prisoner is awake, knight and archer are asleep', () => {
    assert.strictEqual(canFreePrisoner(false, false, true, false), true);
  });
});




