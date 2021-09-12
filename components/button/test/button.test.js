import React from 'react';
import Button from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('button', () => {
  it("renders correctly", () => {
    const wrapper = mount(<Button>Hello World!</Button>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
