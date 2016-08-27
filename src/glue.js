import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const handlers = {
  component: () => {},
  container: () => {},
  layout: () => {}
};

export default function glue( contract, Component, actions ) {
  if (contract.type === 'container'){
    const Container = (props) => {
      return (
        <Component
        {...props}
        />
      );
    };

    function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(actions, dispatch)
      };
    }

    function mapStateToProps(state) {
      const props = Object
      .keys(contract.state)
      .reduce((prev, next) => prev[next] = state[contract.state[next]], {});
      return props;
    }

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(Container);
  }
  return Component
}

function mapState(contract, state) {
  return function(state) {
    const props = Object
    .keys(contract.state)
    .reduce((prev, next) => prev[next] = state[contract.state[next]], {});
    return props;
  }

}

function mapActions(actions, state) {
  return function(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

}
