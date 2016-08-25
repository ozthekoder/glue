import initialState from './initialState';


const handlers = {
  INCREMENT_LEFT: (state, action) => {
    const s = {...state};
    s.value += 1;
    return s;
  }
}

export default function left(state=initialState.left, action) {
  return handlers[action.type] ? handlers[action.type](state, action) : state;
}
