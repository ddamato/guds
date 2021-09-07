import React from 'react';
import Button from '../src';
const { wrap } = require(`${process.env.root}/test-suite.js`);

describe('button', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Button>Hello World!</Button>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
