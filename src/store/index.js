import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import syncReducers from '../reducers'
import { updateLocation } from '../reducers/location'

export default class Store {
  static __instance__ = null
  static enhancers = __DEV__ && typeof window.devToolsExtension === 'function '? [window.devToolsExtension()] : []
  static middlewares = [thunk]
  static asyncReducers = {}
  static syncReducers = syncReducers
  static initialState = {}

  static get() {
    return this.__instance__ ? this.__instance__ : this.create();
  }

  static create(initialState = this.initialState) {
    this.__instance__ = createStore(
      this.makeRootReducer(),
      initialState,
      compose(
        applyMiddleware(...this.middlewares),
        ...this.enhancers
      )
    );

    this.unsubscribeHistory = browserHistory.listen(updateLocation(this.__instance__));
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        this.syncReducers = require('../reducers');
        this.__instance__.replaceReducer(this.makeRootReducer())
      });
    }

    return this.__instance__;
  }

  static makeRootReducer() {
    return combineReducers({
      ...this.syncReducers,
      ...this.asyncReducers
    })
  }

  static injectReducer(key, reducer) {
    this.asyncReducers[key] = reducer;
    this.__instance__.replaceReducer(this.makeRootReducer());
  }
}
