import React from 'react';
import Modal from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('modal', () => {
  it("renders correctly", () => {
    const wrapper = mount(<Modal>Hello World!</Modal>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
