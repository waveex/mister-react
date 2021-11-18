import React from 'react';
import { PropTypes } from 'prop-types';

const UsersListItem = ({
  userData: { average, fullname, attendance = '0%' },
}) => {
  return (
    <>
      <li>
        <div>{average}</div>
        <div>
          <p>{fullname}</p>
          <p>attendance: {attendance}</p>
        </div>
        <button>X</button>
      </li>
    </>
  );
};
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
