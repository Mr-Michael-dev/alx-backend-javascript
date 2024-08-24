const request = require('request');
const { expect } = require('chai');

describe('gET /', () => {
  it('should return a response code of 200', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the right body', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('gET /cart/:id', () => {
  it('should return a status code of 200', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/cart/23', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the right body', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/cart/23', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 23');
      done();
    });
  }));

  it('should return 404 status code on wrong path', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/cart/we', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  it('should return correct message on wrong path', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/cart/we', (error, response, body) => {
      expect(body).to.equal('Item not found');
      done();
    });
  }));
});

describe('pOST /login', () => {
  it('should return a response code of 200', () => new Promise((done) => {
    const options = {
      url: 'http://127.0.0.1:7865/login',
      json: { userName: 'mike' },
      headers: { 'Content-Type': 'application/json' },
    };
    request.post(options, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the right body', () => new Promise((done) => {
    const options = {
      url: 'http://127.0.0.1:7865/login',
      json: { userName: 'mike' },
      headers: { 'Content-Type': 'application/json' },
    };
    request.post(options, (error, response, body) => {
      expect(body).to.equal('Welcome mike');
      done();
    });
  }));
});

describe('gET /available_payments', () => {
  it('should return a response code of 200', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/available_payments', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the right body', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  }));
});
