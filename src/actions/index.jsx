export function incrementFoo() {
  console.log('INCREMENT FOO');
  return {
    type: 'FOO'
  };
};

export function incrementBar() {
  console.log('INCREMENT BAR');
  return {
    type: 'BAR'
  };
};
