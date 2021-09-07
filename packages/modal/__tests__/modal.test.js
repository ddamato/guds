import React from 'react';
import Modal from '../src';
const { wrap } = require(`${process.env.root}/test-suite.js`);

describe('modal', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Modal>Hello World!</Modal>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
