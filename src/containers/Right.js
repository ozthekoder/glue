import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import RightComponent from '../components/Right';

export const Right = (props) => {
  return (
    <RightComponent
      value={props.value}
    />
  );
};

Right.propTypes = {
  value: PropTypes.number
};

function mapStateToProps(state) {
  const { value } = state.right;
  return {
    value
  };
}


export default connect(
  mapStateToProps
)(Right);
