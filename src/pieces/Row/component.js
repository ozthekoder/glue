import React, { PropTypes } from 'react';

const Row = (props) => {
    console.log('HEADER RENDERED');
    return (
      <div>
      ROW
      <button onClick={props.actions.incrementLeft}>left</button>
      <button onClick={props.actions.incrementRight}>right</button>
      </div>
    );
};

Row.PropTypes = {
  value: PropTypes.number,
  actions: PropTypes.object
};


export default Row;
