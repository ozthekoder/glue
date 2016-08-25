import React, { PropTypes } from 'react';

const Right = (props) => {
  console.log('RIGHT RENDERED');
  return (
      <div>
      RIGHT BOX
      {props.value}
      </div>
    );
};

Right.PropTypes = {
  value: PropTypes.number
};


export default Right;
