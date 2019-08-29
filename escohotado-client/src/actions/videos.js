import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  CLEAN_VIDEO,
  CLEAN_VIDEOS,
  baseUrl
} from "./actionTypes";

export async function fetchVideos() {
  const response = await fetch(`${baseUrl}/videos/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  return {
    type: FETCH_VIDEOS,
    payload: data
  };
}

export async function filterVideos(tags, search) {
  let filterTags = Array.from(
    Object.keys(tags),
    k => tags[k] === true && `${k}`
  )
    .filter(Boolean)
    .join(",");
  const response = await fetch(
    `${baseUrl}/search_videos/?tags=${[filterTags]}&search=${
      search ? search : false
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const data = await response.json();

  return {
    type: FILTER_VIDEOS,
    payload: data
  };
}

export function cleanVideos(id) {
  return {
    type: CLEAN_VIDEOS,
    payload: []
  };
}
export async function fetchVideo(id) {
  const response = await fetch(`${baseUrl}/videos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  return {
    type: FETCH_VIDEO,
    payload: data
  };
}

export function cleanVideo(id) {
  return {
    type: CLEAN_VIDEO,
    payload: {}
  };
}
