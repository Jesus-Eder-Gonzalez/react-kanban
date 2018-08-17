import React from 'react';
import './Header.css';
import ClickableButton from '../ClickableButton/ClickableButton';

const Header = props => {
  const name = props.name || 'Header';
  return (
    <header className={`${name}-header`}>
      <h1>{props.title}</h1>
      <div className="Header-Button">
        <ClickableButton button={`${name}`} label={props.label} />
      </div>
    </header>
  );
};

export default Header;
