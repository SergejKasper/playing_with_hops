/* eslint-env node, mocha */

import React from 'react';
import matchRoutes from 'react-router/lib/matchRoutes';
import { createRoutes } from 'react-router/lib/RouteUtils';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import {expect} from 'chai';

/*containers*/
import Routes from './index';

describe('<Routes/>', () => {
  let createLocation = createMemoryHistory().createLocation
  let routes = createRoutes(Routes)
  it('supports pathless route at root', function (done) {
      matchRoutes(routes, createLocation('/'), function (error, match) {
        expect(match).to.exist
        done()
      })
  })
  it('matches the correct routes', function (done) {
    matchRoutes(routes, createLocation('/other'), function (error, match) {
      expect(match).to.exist
      /*expect(match.routes).toEqual([ HomePageRoute,  OtherPageRoute ])*/
      done()
    })
  })
});
