import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { CardUserDetails, ListUserRepos } from "../components";

function UserDetails({ user, userRepos, onToggleScreen }) {
  return (
    <section id="user-details" className="d-flex w-100">
      <div className="col-12 col-xl-6 d-flex flex-column">
        <CardUserDetails user={user} />
        <button
          className="btn btn-voltar btn-primary btn block mx-auto mt-5 w-50"
          onClick={onToggleScreen}
        >
          Voltar
        </button>
      </div>
      <div className="col-12 col-xl-6">
        <h2 className="my-3 text-center">User Repositories</h2>
        <ListUserRepos userRepos={userRepos} />
      </div>
    </section>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  userRepos: PropTypes.array.isRequired,
  onToggleScreen: PropTypes.func.isRequired,
};

export default UserDetails;
