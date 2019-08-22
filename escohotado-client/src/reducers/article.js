import {
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_ARTICLE,
  CLEAN_ARTICLE,
  CLEAN_ARTICLES
} from "../actions/actionTypes";

export function articlesReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES:
      return payload;
    case CLEAN_ARTICLES:
      return ["clean"];
    case FILTER_ARTICLES:
      return payload;
    default: {
      return ["clean"];
    }
  }
}

export function articleReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_ARTICLE:
      return payload;
    case CLEAN_ARTICLE:
      return { empty: true };
    default: {
      return { empty: true };
    }
  }
}
