import { combineReducers } from "redux";
import githubReducer from "./githubReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  github: githubReducer,
  pagination: paginationReducer,
});
