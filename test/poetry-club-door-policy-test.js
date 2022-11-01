const { frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword } = require('../poetry-club-door-policy');
const assert = require('chai').assert;

describe('#frontDoorResponse', () => {
  it('Returns the first character of a given line', () => {
    assert.strictEqual(frontDoorResponse('I won\'t give up'), 'I');
  });
});

describe('frontDoorPassword', () => {
  it('Formats the given word so that only the first character is capitalized', () => {
    assert.strictEqual(frontDoorPassword('SHIRE'), 'Shire');
  });
});

describe('backDoorResponse', () => {
  it('Returns the last character of a given line', () => {
    assert.strictEqual(backDoorResponse('No you can\'t'), 't');
  });
});

describe('backDoorPassword', () => {

});