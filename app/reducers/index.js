// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import glosor from './glosorReducer';
import testGlosor from './testGlosorReducer';

const rootReducer = combineReducers({
  counter,
  glosor,
  testGlosor,
  routing
});

export default rootReducer;
