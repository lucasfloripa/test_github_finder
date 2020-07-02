import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import CardUserDetails from "./CardUserDetails";
import ListUserRepos from "./ListUserRepos";

const UserDetails = ({ user, repos }) => {
  return (
    <section id="user-details" className="d-flex w-100">
      <div className="col-12 col-xl-6 d-flex flex-column p-0">
        <CardUserDetails user={user} />
        <Link
          to="/userlist"
          className="btn btn-voltar btn-primary btn block mx-auto mt-5 w-50"
        >
          Voltar
        </Link>
      </div>
      <div className="col-12 col-xl-6 p-0">
        <h2 className="my-3 text-center">User Repositories</h2>
        <ListUserRepos repos={repos} />
      </div>
    </section>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};

export default UserDetails;
