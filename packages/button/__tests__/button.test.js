import React from 'react';
import { configure, shallow } from 'enzyme';
import Button from '../src';

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

function wrap(component) {
  return shallow(shallow(component).get(0));
}

describe('button', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Button>Hello World!</Button>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
