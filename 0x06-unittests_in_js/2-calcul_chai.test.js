// contains test cases of calculateNumber function
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

// test cases for calculateNumber function
describe('calculateNumber', () => {
  it('should through error if type is not valid', () => {
    expect(calculateNumber.bind(null, 'INVALID', 3, 5)).to.throw(Error);
  });

  describe('sUM', () => {
    it('should return the sum of two numbers rounded to the nearest integer', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should handle decimal numbers and whole numbers', () => {
      expect(calculateNumber('SUM', 4, 5.8)).to.equal(10);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -2, 3)).to.equal(1);
      expect(calculateNumber('SUM', -4, -5)).to.equal(-9);
    });

    it('should throw error when non integers are passed', () => {
      expect(calculateNumber.bind(null, 'SUM', 'e', 3.7)).to.throw(Error);
      expect(calculateNumber.bind(null, 'SUM', 2.5, 'b')).to.throw(Error);
    });

    it('should handle zero', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should handle decimal numbers', () => {
      expect(calculateNumber('SUM', 2.5, 3.7)).to.equal(7);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the difference between two numbers rounded to the nearest integer', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('should handle decimal numbers and whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.8, 4)).to.equal(2);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -3, 1)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', -4, -5)).to.equal(1);
    });

    it('should throw error when non integers are passed', () => {
      expect(calculateNumber.bind(null, 'SUBTRACT', 'e', 3.7)).to.throw(Error);
      expect(calculateNumber.bind(null, 'SUBTRACT', 2.5, 'b')).to.throw(Error);
    });

    it('should handle zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should handle decimal numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 3.7)).to.equal(-1);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of two numbers rounded to the nearest integer', () => {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    });

    it('should handle decimal numbers and whole numbers', () => {
      expect(calculateNumber('DIVIDE', 5.8, 4)).to.equal(1.5);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('DIVIDE', -3, 1)).to.equal(-3);
      expect(calculateNumber('DIVIDE', -4, -5)).to.equal(0.8);
    });

    it('should throw error when non integers are passed', () => {
      expect(calculateNumber.bind(null, 'DIVIDE', 'e', 3.7)).to.throw(Error);
      expect(calculateNumber.bind(null, 'DIVIDE', 2.5, 'b')).to.throw(Error);
    });

    it('should handle zero', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('should handle decimal numbers', () => {
      expect(calculateNumber('DIVIDE', 2.5, 3.7)).to.equal(0.75);
    });
  });
});
