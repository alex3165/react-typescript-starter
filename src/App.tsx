// tslint:disable-next-line
/// <reference path='typings/globals.d.ts'/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';

import Main from './containers/main';

import rootReducer from './reducers';
import './common.css';

declare var process: any;
const env = process.env.NODE_ENV;
const middlewares: Array<any> = [ thunk ];

if (env === 'dev') {
  middlewares.push(createLogger());
}

const store = createStore(rootReducer, Map(), applyMiddleware(...middlewares));
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state: Map<string, any>) => state.get('routing')
  });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}/>
    </Router>
  </Provider>,
  document.getElementById('content')
);
