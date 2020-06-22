import React from "react";
import PropTypes from "prop-types";

// Components
import { TableUserList, Pagination, FormSinceSearch } from "../components";

function UserList({
  users,
  pagination,
  since,
  onSetCurrentPage,
  onSinceSearch,
  onChange,
  onShowUserDetails,
  history,
}) {
  return (
    <section id="user-list" className="w-100">
      <h3 className="my-3 text-center">Users List</h3>
      <TableUserList
        users={users}
        onShowUserDetails={onShowUserDetails}
        history={history}
      />
      <Pagination pagination={pagination} onSetCurrentPage={onSetCurrentPage} />
      <FormSinceSearch
        since={since}
        onSinceSearch={onSinceSearch}
        onChange={onChange}
      />
    </section>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  since: PropTypes.number.isRequired,
  onSetCurrentPage: PropTypes.func.isRequired,
  onSinceSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onShowUserDetails: PropTypes.func.isRequired,
};

export default UserList;
