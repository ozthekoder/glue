import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Component from './component';
import contract from './contract';
let Header = Component;

if (contract.type === 'container'){
  const Container = (props) => {
    return (
      <Component
      {...props}
      />
    );
  };

  Container.propTypes = {
    value: PropTypes.number
  };

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  function mapStateToProps() {
    return {
    };
  }


  Header = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container);
}

export default Header;
