import React, { PropTypes } from 'react';

const Left = (props) => {
  console.log('LEFT RENDERED');
  return (
      <div>
      LEFT BOX
      {props.value}
      </div>
    );
};

Left.PropTypes = {
  value: PropTypes.number
};


export default Left;
