import {
  GET_GITHUB_USERS_BY_SINCE,
  GET_GITHUB_USER_DETAILS,
  GET_GITHUB_USER_REPOS,
} from "../actions/types";

const INITIAL_STATE = {
  user: {},
  users: [],
  repos: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GITHUB_USERS_BY_SINCE:
      return {
        ...state,
        users: action.payload,
      };
    case GET_GITHUB_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_GITHUB_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
}
