import React from 'react';
import Modal from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('<Modal/>', function () {

  it("renders correctly", function () {
    const component = mount(<Modal>Hello World!</Modal>);
    expect(component.contains('Hello World!')).toEqual(true);
  });

});
