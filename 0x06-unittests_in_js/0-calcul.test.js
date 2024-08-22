// contains test cases of calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul');

// test cases for calculateNumber function
describe('calculateNumber', () => {
  it('should return the sum of two numbers rounded to the nearest integer', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should handle decimal numbers and whole numbers', () => {
    assert.strictEqual(calculateNumber(4, 5.8), 10);
  });

  it('should handle decimal numbers', () => {
    assert.strictEqual(calculateNumber(2.5, 3.7), 7);
    assert.strictEqual(calculateNumber(4.2, 5.8), 10);
  });
});
