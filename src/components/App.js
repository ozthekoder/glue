import React from 'react';
import Left from '../containers/Left';
import Right from '../containers/Right';
import Header from '../containers/Header';

export default function App(props) {
  console.log('APP RENDERED');
  return (
    <div id="app">
      <Header {...props} />
      <Left {...props} />
      <Right {...props} />
    </div>
  );
}
