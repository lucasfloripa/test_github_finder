import React from "react";
import PropTypes from "prop-types";

const TableUserList = ({ users, onShowUserDetails, history }) => {
  return (
    <table className="table table-bordered table-hover mb-4 w-50 mx-auto text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Login</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className="cursor-pointer"
            onClick={() => {
              onShowUserDetails(user.login, history);
            }}
          >
            <td>{user.id}</td>
            <td>{user.login}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableUserList.propTypes = {
  users: PropTypes.array.isRequired,
  onShowUserDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default TableUserList;
