import React from 'react';

const style = {
  fontSize: '.75rem',
  backgroundColor: '#373b44',
  border: '1px solid white',
  color: 'white',
  marginRight: '20px',
  height: '25px',
  textAlign: 'center',
  display: 'block'
};


const ClickableButton = props => {
  let styles = style;
  
  if (props.customStyles) {
    styles = Object.assign({}, styles, props.customStyles);
  }

  if (!props.label) {
    styles = Object.assign({}, styles, { display: 'none' });
  } 

  return (
    <button onClick={props.clickHandler} style={styles}>
      {props.label || 'Click Me'}{' '}
    </button>
  );
};

export default ClickableButton;
