import axios from "axios";
import {
  GET_GITHUB_USERS_BY_SINCE,
  GET_GITHUB_USER_DETAILS,
  GET_GITHUB_USER_REPOS,
  SET_PAGINATION,
} from "./types";

export const getGithubUsersBySince = (url) => async (dispatch) => {
  let since;

  // Default Since Param
  if (url === undefined || url === "since") {
    since = "since=0&per_page=10";
  } else {
    since = url;
  }

  const res = await axios.get(
    `http://localhost:5000/api/v1/github/users/${since}`
  );

  const { users, pagination } = res.data;

  return (
    dispatch({
      type: GET_GITHUB_USERS_BY_SINCE,
      payload: users,
    }),
    dispatch({
      type: SET_PAGINATION,
      payload: pagination,
    })
  );
};

export const getGithubUserDetails = (username) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/github/users/${username}/details`
  );

  return dispatch({
    type: GET_GITHUB_USER_DETAILS,
    payload: res.data.data,
  });
};

export const getGithubUserRepos = (username) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/github/users/${username}/repos`
  );

  return dispatch({
    type: GET_GITHUB_USER_REPOS,
    payload: res.data.data,
  });
};
