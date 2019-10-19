import { axiosInstance } from "../helpers/configured_axios";
import {
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  // UPDATE_ARTICLE_ERROR,
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

// To improve in the future. Hint: map tags in Rails.
export const createArticle = article => {
  let newArticle = { ...article };
  newArticle.tag = newArticle.tags;
  delete newArticle.tags;
  const response = axiosInstance.post("/articles/", newArticle);

  return {
    type: CREATE_ARTICLE,
    payload: response
  };
};

export const fetchArticle = id => {
  const response = axiosInstance.get(`/articles/${id}`);

  return {
    type: FETCH_ARTICLE,
    payload: response
  };
};

export const editArticle = article => {
  article.tag = article.tags;
  delete article.tags;
  const request = axiosInstance.put(`/articles/${article.id}/`, { article });

  return {
    type: UPDATE_ARTICLE_SUCCESS,
    payload: request
  };
};

export const cleanArticle = () => {
  return {
    type: CLEAN_ARTICLE,
    payload: {}
  };
};

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
