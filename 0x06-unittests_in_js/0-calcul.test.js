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

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-2, 3), 1);
    assert.strictEqual(calculateNumber(-4, -5), -9);
  });

  it('should throw error when non integers are passed', () => {
    assert.throws(calculateNumber.bind(null, 'e', 3.7), Error);
    assert.throws(calculateNumber.bind(null, 2.5, 'b'), Error);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle decimal numbers', () => {
    assert.strictEqual(calculateNumber(2.5, 3.7), 7);
    assert.strictEqual(calculateNumber(4.2, 5.8), 10);
  });
});
