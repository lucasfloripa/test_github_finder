import React from "react";
import PropTypes from "prop-types";

// Utils
import Moment from "react-moment";

const CardUserDetails = ({ user }) => {
  return (
    <div className="card-position mx-auto w-75">
      <div className="card text-center">
        <div className="card-header">
          <h2 className="my-3 text-center">User Details</h2>
        </div>
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-around">
            <div>
              <span className="text-primary">Login</span> {user.login}
            </div>
            <div>
              <span className="text-primary">Id</span> {user.id}
            </div>
          </h3>
          <hr />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.html_url}
          </a>
          <p>
            <span className="text-primary">Criado Em</span>{" "}
            <Moment format="DD/MM/YYYY">{user.created_at}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

CardUserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CardUserDetails;
