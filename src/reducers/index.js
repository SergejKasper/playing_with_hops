// @flow
/*modules*/
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
/*dataFlow*/
import messageReducer from './message';
import { register } from 'hops';

const reducer = register('message', messageReducer);
export default reducer;
