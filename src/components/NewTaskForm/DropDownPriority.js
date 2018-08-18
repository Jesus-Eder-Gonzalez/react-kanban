import React, { Component } from 'react';

const DropDownPriority = props => {
  console.log('drop', props.drop);
  if (!props.drop) {
    return;
  } else {
    let dropDownName = props.drop.map(element => {
      return (
        <option value={element.id}>{`${element.first_name} ${element.last_name}`}</option>
      );
    });
    return <select name="priority">{dropDownName}</select>;
  }
};

export default DropDownPriority;
