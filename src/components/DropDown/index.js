import React from 'react';
import './DropDown.css';

const DropDown = props => {
  if (!props.drop) {
    return;
  } else {
    /* dropDownOptions creates the options dynamically, these will fill the drop down selector */
    let dropDownOptions = props.drop.map(element => {
      return (
        <option key={element.id} value={element.id}>
          {element.name}
        </option>
      );
    });
    return (
      /* This is the actual drop down selector, id and name use the field name, and value is the initial value passed in
      option value="" disabled makes it so you must change the value on the new task form. */
      <select
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        <option value="" disabled />
        {dropDownOptions}
      </select>
    );
  }
};

export default DropDown;
