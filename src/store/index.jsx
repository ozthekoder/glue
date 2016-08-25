import { createStore } from 'redux';

export default function generateStore(preloadedState, reducers) {
  return createStore(reducers, preloadedState);
}
