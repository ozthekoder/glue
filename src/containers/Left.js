import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LeftComponent from '../components/Left';

export const Left = (props) => {
  return (
    <LeftComponent
      value={props.value}
    />
  );
};

Left.propTypes = {
  value: PropTypes.number
};

function mapStateToProps(state) {
  const { value } = state.left;
  return {
    value
  };
}


export default connect(
  mapStateToProps
)(Left);
