// 3-payment.test.js
const { spy } = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let mySpy;

  beforeEach(() => {
    mySpy = spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    mySpy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
