import {
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_ARTICLE,
  CREATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  CLEAN_ARTICLE,
  CLEAN_ARTICLES
} from "../actions/actionTypes";

export function articlesReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES:
      return payload.data;
    case CLEAN_ARTICLES:
      return ["clean"];
    case FILTER_ARTICLES:
      return payload.data;
    default: {
      return ["clean"];
    }
  }
}

export function articleReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_ARTICLE:
      return payload.data;
    case CREATE_ARTICLE:
      return payload.data;
    case UPDATE_ARTICLE_SUCCESS:
      return { ...payload.data, updated: true };
    case CLEAN_ARTICLE:
      return { empty: true };
    default: {
      return { empty: true };
    }
  }
}
