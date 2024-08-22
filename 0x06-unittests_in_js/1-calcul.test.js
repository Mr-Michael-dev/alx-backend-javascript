// contains test cases of calculateNumber function
const assert = require('assert');
const calculateNumber = require('./1-calcul');

// test cases for calculateNumber function
describe('calculateNumber', () => {
  it('should through error if type is not valid', () => {
    assert.throws(calculateNumber.bind(null, 'INVALID', 3, 5), Error);
  });

  describe('sUM', () => {
    it('should return the sum of two numbers rounded to the nearest integer', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should handle decimal numbers and whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 4, 5.8), 10);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2, 3), 1);
      assert.strictEqual(calculateNumber('SUM', -4, -5), -9);
    });

    it('should throw error when non integers are passed', () => {
      assert.throws(calculateNumber.bind(null, 'SUM', 'e', 3.7), Error);
      assert.throws(calculateNumber.bind(null, 'SUM', 2.5, 'b'), Error);
    });

    it('should handle zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should handle decimal numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.7), 7);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the difference between two numbers rounded to the nearest integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should handle decimal numbers and whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 4), 2);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3, 1), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', -4, -5), 1);
    });

    it('should throw error when non integers are passed', () => {
      assert.throws(calculateNumber.bind(null, 'SUBTRACT', 'e', 3.7), Error);
      assert.throws(calculateNumber.bind(null, 'SUBTRACT', 2.5, 'b'), Error);
    });

    it('should handle zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should handle decimal numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 3.7), -1);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of two numbers rounded to the nearest integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1), 3);
    });

    it('should handle decimal numbers and whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.8, 4), 1.5);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3, 1), -3);
      assert.strictEqual(calculateNumber('DIVIDE', -4, -5), 0.8);
    });

    it('should throw error when non integers are passed', () => {
      assert.throws(calculateNumber.bind(null, 'DIVIDE', 'e', 3.7), Error);
      assert.throws(calculateNumber.bind(null, 'DIVIDE', 2.5, 'b'), Error);
    });

    it('should handle zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('should handle decimal numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 3.7), 0.75);
    });
  });
});
