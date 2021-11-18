import React from 'react';
import { users } from 'data/users';
import UsersListItem from './UsersListItem/UsersLIstItem';

const UsersList = () => {
  return (
    <>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
