import React from 'react';
import Pieces from './pieces';
import template from './template';

export default function Root(props) {
  console.log('ROOT RENDERED');
  return (
    <div id="root">
    {props.children}
    </div>
  );
}
