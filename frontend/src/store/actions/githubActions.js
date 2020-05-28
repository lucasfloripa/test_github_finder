import axios from "axios";
import {
  GET_GITHUB_USERS,
  GET_GITHUB_USER_DETAILS,
  GET_GITHUB_USER_REPOS,
  SET_PAGINATION,
} from "./types";

export const getGithubUsers = (number, currentpage) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/github/users/${number}?page=${currentpage}`
  );
  
  return (
    dispatch({
      type: GET_GITHUB_USERS,
      payload: res.data.users,
    }),
    dispatch({
      type: SET_PAGINATION,
      payload: { page: res.data.page, pageCount: res.data.pageCount },
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
