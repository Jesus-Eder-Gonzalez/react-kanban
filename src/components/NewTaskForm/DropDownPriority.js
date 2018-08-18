import React from 'react';

const DropDownPriority = props => {
  if (!props.drop) {
    return;
  } else {
    let dropDownName = props.drop.map(element => {
      return <option key={element.id} value={element.id}>{element.name}</option>;
    });
    return (
      <select
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        <option value="" disabled />
        {dropDownName}
      </select>
    );
  }
};

export default DropDownPriority;
