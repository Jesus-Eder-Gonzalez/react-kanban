import React from 'react';
import UserListItem from './UserListItem';

const UserList = props => {
  return (
    <ul><h1>Users</h1>
      {props.users.map((user, idx) => {
        return (
          <UserListItem
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
            key={idx}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
