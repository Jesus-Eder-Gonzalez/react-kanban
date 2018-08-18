import React, { Component } from 'react';

const DropDownUser = props => {
  console.log('drop', props.drop);
  if (!props.drop) {
    return;
  } else {
    let dropDownName = props.drop.map(element => {
      return (
        <option value={element.id}>{`${element.first_name} ${element.last_name}`}</option>
      );
    });
    return (
      <select id={props.name} name={props.name} onChange={props.onChange} value={props.value}>
        <option value="" disabled />
        {dropDownName}
      </select>
    );
  }
};

export default DropDownUser;
