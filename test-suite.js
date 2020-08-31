import path from 'path';
import { configure, shallow } from 'enzyme';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
const staticStorybookPath = path.join(__dirname, '_site');

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

jest.mock('linaria', () => {
  return {
    css: jest.fn(() => ''),
    cx: jest.fn(() => ''),
  }
});

jest.mock('prop-types', () => {
  return {
    css: jest.fn(() => ''),
    cx: jest.fn(() => ''),
  }
});

jest.mock('prop-types', () => {
  const RealPropTypes = jest.requireActual('prop-types');
  const mockPropTypes = jest.requireActual('mock-prop-types');
 
  return mockPropTypes(RealPropTypes);
});

export function wrap(component) {
  return shallow(shallow(component).get(0));
}

initStoryshots({
  framework: 'react',
  test: imageSnapshot({
    storybookUrl: `file://${staticStorybookPath}`
  })
});