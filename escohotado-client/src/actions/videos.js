import { axiosInstance } from "../helpers/configured_axios";
import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  CLEAN_VIDEO,
  CLEAN_VIDEOS
} from "./actionTypes";

export const fetchVideos = () => {
  const request = axiosInstance.get("/videos/");

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
};

export const filterVideos = (tags, search) => {
  let filterTags = Array.from(
    Object.keys(tags),
    k => tags[k] === true && `${k}`
  )
    .filter(Boolean)
    .join(",");

  const response = axiosInstance.get(
    `/search_videos/?tags=${[filterTags]}&search=${search ? search : false}`
  );

  return {
    type: FILTER_VIDEOS,
    payload: response
  };
};

export const cleanVideos = () => {
  return {
    type: CLEAN_VIDEOS,
    payload: []
  };
};

export const fetchVideo = id => {
  const response = axiosInstance.get(`/video/${id}`);

  return {
    type: FETCH_VIDEO,
    payload: response
  };
};

export const deleteVideo = id => {
  return dispatch => {
    axiosInstance.delete(`/videos/${id}`, id).then(() => {
      return dispatch(fetchVideos());
    });
  };
};

export const cleanVideo = () => {
  return {
    type: CLEAN_VIDEO,
    payload: {}
  };
};
