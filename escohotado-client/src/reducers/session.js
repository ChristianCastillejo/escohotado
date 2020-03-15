import { FETCH_LOGGED_IN_USER, LOGOUT } from "../actions/actionTypes";

export const sessionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_LOGGED_IN_USER:
      return payload.data;
    case LOGOUT:
      return state;
    default: {
      return state;
    }
  }
};
