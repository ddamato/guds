import React from 'react';
import Alert from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('alert', () => {
  it("renders correctly", () => {
    const wrapper = mount(<Alert>Hello World!</Alert>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
