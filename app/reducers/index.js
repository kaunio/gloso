// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import glosor from './glosorReducer';

const rootReducer = combineReducers({
  counter,
  glosor,
  routing
});

export default rootReducer;
