import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import App from './containers/App.jsx';
import generateStore from './store/index.jsx';
import reducers from './reducers/index.jsx';
import initialState from './reducers/initialState.jsx';

console.log(reducers);
render(
  <Provider store={generateStore(initialState, combineReducers(reducers))}>
    <App />
  </Provider>,
  document.getElementsByTagName('body')[0]
);
