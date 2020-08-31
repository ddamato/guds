import React from 'react';
import { wrap } from '~root/test-suite.js';
import Button from '../src';

describe('button', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Button>Hello World!</Button>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
