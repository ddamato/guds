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
})

export function wrap(component) {
  return shallow(shallow(component).get(0));
}

initStoryshots({
  framework: 'react',
  test: imageSnapshot({
    storybookUrl: `file://${staticStorybookPath}`
  })
});