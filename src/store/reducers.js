import { combineReducers } from 'redux'
import location from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
