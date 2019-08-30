import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  CLEAN_VIDEO,
  CLEAN_VIDEOS
} from "../actions/actionTypes";

export function videosReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_VIDEOS:
      return payload;
    case CLEAN_VIDEOS:
      return ["clean"];
    case FILTER_VIDEOS:
      return payload;
    default: {
      return ["clean"];
    }
  }
}

export function videoReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_VIDEO:
      return payload;
    case CLEAN_VIDEO:
      return { empty: true };
    default: {
      return { empty: true };
    }
  }
}