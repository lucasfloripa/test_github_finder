import { SET_PAGINATION } from "../actions/types";

const INITIAL_STATE = {
  pagination: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
