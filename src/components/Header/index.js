import React from 'react';
import './Header.css';

const Header = props => {

  const name = props.name || 'Header';
  return (
    <header className={`${name}-header`}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;