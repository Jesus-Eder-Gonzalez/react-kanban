import React from 'react';
import Column from './Column';
import './KanBanBoard.css';

const KanBanBoard = props => {
  return (
    <div className="KanBanBoard">
      <Column status={props.status} cards={props.cards}/>
    </div>
  );
};
export default KanBanBoard;
