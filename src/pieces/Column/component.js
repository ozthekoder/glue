import React, { PropTypes } from 'react';

const Column = (props) => {
    console.log('COLUMN RENDERED');
    return (
      <div>
      ROW
      <button onClick={props.actions.incrementLeft}>left</button>
      <button onClick={props.actions.incrementRight}>right</button>
      </div>
    );
};

Column.PropTypes = {
  value: PropTypes.number,
  actions: PropTypes.object
};


export default Column;
