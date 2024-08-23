// 3-payment.test.js
const { spy } = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let mySpy;

  beforeEach(function() {
    mySpy = spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    mySpy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    
    expect(mySpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
