// test for
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return an object', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.be.an('object');
        done();
      })
      .catch(done);
  }));
  it('should return a successful response from the API', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch(done);
  }));
  it('should not resolve or reject when success is false', () => new Promise((done) => {
    const timeout = setTimeout(() => {
      done();
    }, 100); // Test will pass after 100ms if no resolution/rejection

    getPaymentTokenFromAPI(false)
      .then(() => {
        clearTimeout(timeout);
        done(new Error('Expected the promise to do nothing'));
      })
      .catch(() => {
        clearTimeout(timeout);
        done(new Error('Expected the promise to do nothing'));
      });
  }));
});
