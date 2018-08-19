import React from 'react';

const TextInput = props => {
  return (
    <input
      type="text"
      name={props.name}
      id={props.name}
      ref={props.focus}
      onChange={props.onChange}
      value={props.input}
    />
  );
};

export default TextInput;
