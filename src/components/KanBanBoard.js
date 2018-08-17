import React from 'react';
import UserList from './UserList';
import Column from './Column';
import './KanBanBoard.css';

const KanBanBoard = props => {
  return (
    <div className="KanBanBoard">
      <Column status={props.status} users={props.users} />
    </div>
  );
};
export default KanBanBoard;
