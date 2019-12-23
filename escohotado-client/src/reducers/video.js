import {
  FETCH_VIDEOS,
  FETCH_RANDOM_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  CREATE_VIDEO,
  UPDATE_VIDEO_SUCCESS,
  CLEAN_VIDEO,
  CLEAN_VIDEOS
} from "../actions/actionTypes";

export function videosReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_VIDEOS:
      return payload.data;
    case FETCH_RANDOM_VIDEOS:
      return payload.data;
    case CLEAN_VIDEOS:
      return ["clean"];
    case FILTER_VIDEOS:
      return payload.data;
    default: {
      return ["clean"];
    }
  }
}

export function videoReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_VIDEO:
      return payload.data;
    case CREATE_VIDEO:
      return payload.data;
    case UPDATE_VIDEO_SUCCESS:
      return { ...payload.data, updated: true };
    case CLEAN_VIDEO:
      return { empty: true };
    default: {
      return { empty: true };
    }
  }
}
