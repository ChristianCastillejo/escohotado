import { axiosInstance } from "../helpers/configured_axios";
import {
  UPDATE_ARTICLE,
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_ARTICLE,
  CLEAN_ARTICLE,
  CLEAN_ARTICLES
} from "./actionTypes";

export const fetchArticles = () => {
  const request = axiosInstance.get("/articles/");

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
};

export const filterArticles = (tags, search) => {
  let filterTags = Array.from(
    Object.keys(tags),
    k => tags[k] === true && `${k}`
  )
    .filter(Boolean)
    .join(",");
  const response = axiosInstance.get(
    `/search_articles/?tags=${[filterTags]}&search=${search ? search : false}`
  );

  return {
    type: FILTER_ARTICLES,
    payload: response
  };
};

export const cleanArticles = () => {
  return {
    type: CLEAN_ARTICLES,
    payload: []
  };
};

// export function createArticle(article) {
//   const request = axiosInstance.post("/articles/", article).then(response => {
//     return {
//       type: CREATE_ARTICLE,
//       payload: request
//     };
//   });
// }

// export function deleteArticle(article) {
//   const request = axiosInstance
//     .delete(`/articleS/${article}`)
//     .then(response => {
//       return {
//         type: DELETE_ARTICLE,
//         payload: request
//       };
//     });
// }

// export async function fetchArticles() {
//   const response = await fetch(`${baseUrl}/articles/`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   const data = await response.json();

//   return {
//     type: FETCH_ARTICLES,
//     payload: data
//   };
// }

export const fetchArticle = id => {
  const response = axiosInstance.get(`/articles/${id}`);

  return {
    type: FETCH_ARTICLE,
    payload: response
  };
};

export const editArticle = article => {
  const request = axiosInstance.put(`/articles/${article.id}/`, { article });

  return {
    type: UPDATE_ARTICLE,
    payload: request
  };
};

export const cleanArticle = () => {
  return {
    type: CLEAN_ARTICLE,
    payload: {}
  };
};
