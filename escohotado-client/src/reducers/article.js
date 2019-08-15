import { FETCH_ARTICLES } from "../actions/actionTypes";

export default function articleReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES:
      return payload;
    default: {
      return state;
    }
  }
}
