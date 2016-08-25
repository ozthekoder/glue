import React from 'react';

export default function Bar(props) {
  console.log('BAR RENDERED');
  return (
    <div>
    { props.bar }
    </div>
  );
}
