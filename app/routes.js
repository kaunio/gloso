// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import CreateBundle from './containers/CreateBundle';
import GlosorEditor from './containers/GlosorEditor';
import TestView from './containers/TestView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/createBundle" component={CreateBundle} />
    <Route path="/addGlosor" component={GlosorEditor} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/test" component={TestView} />
  </Route>
);
