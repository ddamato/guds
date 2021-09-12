import React from 'react';
import Button from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('<Button/>', function () {

  it("renders correctly", function () {
    const component = mount(<Button>Hello World!</Button>);
    expect(component.contains('Hello World!')).toEqual(true);
  });
  
});
