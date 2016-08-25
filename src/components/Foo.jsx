import React from 'react';

export default function Foo(props) {
  console.log('FOO IS RENDERED');
  return (
    <div>
    { props.foo }
    </div>
  );
}
