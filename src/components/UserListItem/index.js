import React from 'react';

const UserListItem = ({ name, email }) => (
  <li>
    <h3> {name}</h3>
    <h4> {email}</h4>
  </li>
);

export default UserListItem;
