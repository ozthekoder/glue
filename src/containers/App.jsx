import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index.jsx';
import Foo from '../components/Foo.jsx';
import Bar from '../components/Bar.jsx';

function App(props) {
  console.log('APP IS RENDERED');
  return (
    <div>
    <button onClick={props.actions.incrementFoo}>foo</button>
    <button onClick={props,actions.incrementBar}>bar</button>
    <Foo foo={props.FOO.value} />
    <Bar bar={props.BAR.value} />
    </div>
  );
}

function mapStateToProps(state) {
  const { FOO, BAR } = state;
  return {
    FOO,
    BAR
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
