import React from 'react';
import Alert from '../src';
const { mount } = require(`${process.env.root}/jest.setup.js`);

describe('<Alert/>', function () {

  it("renders correctly", function () {
    const component = mount(<Alert>Hello World!</Alert>);
    expect(component.contains('Hello World!')).toEqual(true);
  });

});
