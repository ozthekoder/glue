import initialState from './initialState.jsx';

function FOO(state=initialState.FOO, action) {
  console.log('foo');
  if(action.type !== 'FOO') return state;
  const s = { ...state };

  s.value += 1;
  return s;
}

function BAR(state=initialState.BAR, action) {
  console.log('bar');
  if(action.type !== 'BAR') return state;
  const s = { ...state };

  s.value += 1;
  return s;
}

export default {
  FOO,
  BAR
}
