import React from 'react';
import Header from '../Header';
import CardList from '../CardList';
import './Column.css';

const Column = props => {

  let colHeader = props.status.map(status => {
    return (
      <div className="Column">
        <Header name = "Col" title={status.name.toUpperCase()} rank={status.rank} />
        <CardList cards = {status.cards} name={status.name} />
      </div>
    );
  });

  return colHeader;
};

export default Column;
