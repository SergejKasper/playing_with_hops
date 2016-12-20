// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messageReducer from './message';
import { register } from 'hops';

const reducer = register('home', messageReducer);
export default reducer;
