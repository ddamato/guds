import React from 'react';
import Alert from '../src';
const { wrap } = require(`${process.env.root}/test-suite.js`);

describe('alert', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Alert>Hello World!</Alert>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
