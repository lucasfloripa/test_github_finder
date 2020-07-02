import React from "react";
import PropTypes from "prop-types";

// Components
import TableUserList from "./TableUserList";
import FormSinceSearch from "./FormSinceSearch";
import Pagination from "./Pagination";

const UserList = ({
  users,
  since,
  pagination,
  onSinceSearch,
  onChange,
  onShowUserDetails,
  onPagination,
  history,
}) => {
  return (
    <section id="user-list" className="w-100">
      <h3 className="my-3 text-center">Users List</h3>
      <TableUserList
        users={users}
        onShowUserDetails={onShowUserDetails}
        history={history}
      />
      <Pagination onPagination={onPagination} pagination={pagination} />
      <FormSinceSearch
        since={since}
        onSinceSearch={onSinceSearch}
        onChange={onChange}
      />
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  since: PropTypes.string.isRequired,
  pagination: PropTypes.array.isRequired,
  onSinceSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onShowUserDetails: PropTypes.func.isRequired,
  onPagination: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default UserList;
