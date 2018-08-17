import React from 'react';

let styles = {
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
  // if (props.customStyles) {
  //   styles = Object.assign({}, styles, props.customStyles);
  // }
  console.log(props);
  if (props.button !== 'Header') {
    styles = Object.assign({}, styles, { display: 'none' });
  } 
  console.log(styles);
  return (
    <button onClick={props.clickHandler} style={styles}>
      {props.label || 'Click Me'}{' '}
    </button>
  );
};

export default ClickableButton;
