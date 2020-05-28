import { SET_PAGINATION } from "../actions/types";

const INITIAL_STATE = {
  page: null,
  pageCount: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        page: action.payload.page,
        pageCount: action.payload.pageCount,
      };
    default:
      return {
        ...state,
      };
  }
}
