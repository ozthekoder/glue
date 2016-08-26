
import React, { PropTypes } from 'react';

const Header = (props) => {
    console.log('HEADER RENDERED');
    return (
      <div>
      HEADER
      <button onClick={props.actions.incrementLeft}>left</button>
      <button onClick={props.actions.incrementRight}>right</button>
      </div>
    );
};

Header.PropTypes = {
  value: PropTypes.number,
  actions: PropTypes.object
};


export default Header;
