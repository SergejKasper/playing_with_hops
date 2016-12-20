// @flow
<<<<<<< HEAD
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messageReducer from './message';
import { register } from 'hops';

const reducer = register('home', messageReducer);
=======
/*modules*/
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
/*dataFlow*/
import messageReducer from './message';
import { register } from 'hops';

const reducer = register('message', messageReducer);
>>>>>>> improve
export default reducer;
