/* eslint-env node, mocha */

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
/*containers*/
import App from './index';

describe('<App/>', () => {
  var home = shallow(<App><div></div></App>);
  it('should have class', () => {
    assert.ok(home.props().className.match(/style-headline/));
  });
});
