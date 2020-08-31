import React from 'react';
import { wrap } from '~root/test-suite.js';
import Alert from '../src';

describe('alert', () => {
  it("renders correctly", () => {
    const wrapper = wrap(<Alert>Hello World!</Alert>);
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
