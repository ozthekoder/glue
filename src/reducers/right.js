import initialState from './initialState';


const handlers = {
  INCREMENT_RIGHT: (state, action) => {
    const s = {...state};
    s.value += 1;
    return s;
  }
}

export default function right(state=initialState.right, action) {
  return handlers[action.type] ? handlers[action.type](state, action) : state;
}
