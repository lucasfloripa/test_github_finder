import React from "react";
import PropTypes from "prop-types";

function ListUserRepos({ userRepos }) {
  return (
    <ul className="list-group">
      {userRepos.map((repo) => (
        <li className="list-item">
          <p>{repo.id}</p>
          <p>{repo.name}</p>
          <p>{repo.html_url}</p>
        </li>
      ))}
    </ul>
  );
}

ListUserRepos.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default ListUserRepos;
