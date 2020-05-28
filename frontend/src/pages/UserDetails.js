import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { CardUserDetails, ListUserRepos } from "../components";

function UserDetails({ user, userRepos }) {
  console.log(userRepos);
  return (
    <section id="right-panel" className="d-flex w-100">
      <div className="col-md-6">
        <CardUserDetails user={user} />
      </div>
      <div className="col-md-6">
        <ListUserRepos userRepos={userRepos} />
      </div>
    </section>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  userRepos: PropTypes.array.isRequired,
};

export default UserDetails;
