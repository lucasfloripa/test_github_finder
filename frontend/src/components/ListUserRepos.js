import React from "react";
import PropTypes from "prop-types";

function ListUserRepos({ userRepos }) {
  return (
    <ul id="list-user-repos" className="list-group mx-auto w-75">
      {userRepos.map((repo) => (
        <li
          key={repo.id}
          className="list-item li-style-none d-flex justify-content-between"
        >
          <span className="text-success">{repo.id}</span>{" "}
          <span className="text-danger">{repo.name}</span>{" "}
          <a href={repo.url} target="_blank">
            {repo.url}
          </a>
        </li>
      ))}
    </ul>
  );
}

ListUserRepos.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default ListUserRepos;
