import {
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_ARTICLE
} from "../actions/actionTypes";

export function articlesReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES:
      return payload;
    case FILTER_ARTICLES:
      return payload;
    default: {
      return state;
    }
  }
}

export function articleReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_ARTICLE:
      return payload;
    default: {
      return state;
    }
  }
}
