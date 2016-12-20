/* eslint-env node, mocha */

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
/*containers*/
import MessageDisplay from './index';

describe('<MessageDisplay/>', () => {
  var home = shallow(<MessageDisplay />);
  it('should contain an h1', () => {
      assert.equal(home.find('h1').length, 1);
  })
});
/* ;*/
