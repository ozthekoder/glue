import React from 'react';
import Left from '../containers/Left';
import Right from '../containers/Right';
import Header from '../containers/Header';

export default function App(props) {
  console.log('APP RENDERED');
  console.log(props);
  return (
    <div id="app">
      <Header />
      <Left />
      <Right />
    </div>
  );
}
