// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer as routing } from 'react-router-redux';
import left from './left';
import right from './right';

export default combineReducers({
  left,
  right,
  routing
});
