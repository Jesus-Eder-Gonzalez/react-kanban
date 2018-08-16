import React from 'react';
import UserList from './UserList';
const KanBanBoard = props => {
  return (
    <div>
      <UserList users={props.users} />
    </div>
  );
};
export default KanBanBoard;
