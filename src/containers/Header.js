import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderComponent from '../components/Header';
import * as actions from '../actions/header';

export const Header = (props) => {
  return (
    <HeaderComponent
      actions={props.actions}
      value={props.value}
    />
  );
};

Header.propTypes = {
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
