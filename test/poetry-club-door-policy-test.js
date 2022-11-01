const { frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword } = require('../poetry-club-door-policy');
const assert = require('chai').assert;

describe('#frontDoorResponse', () => {
  it('Returns the first character of a given line', () => {
    assert.strictEqual(frontDoorResponse('I won\'t give up'), 'I');
  });
});

describe('frontDoorPassword', () => {
  
});

describe('backDoorResponse', () => {

});

describe('backDoorPassword', () => {

});