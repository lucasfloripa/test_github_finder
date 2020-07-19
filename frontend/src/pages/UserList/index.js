import React from "react";
import PropTypes from "prop-types";

// Components
import TableUserList from "./TableUserList";
import FormSinceSearch from "./FormSinceSearch";
import Pagination from "./Pagination";

// Styles
import * as SC from "./styles";

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
    <SC.UserListSection>
      <SC.Title>Users List</SC.Title>
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
    </SC.UserListSection>
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
