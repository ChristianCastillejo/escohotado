import {
  UPDATE_ARTICLE,
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_ARTICLE,
  CLEAN_ARTICLE,
  CLEAN_ARTICLES,
  baseUrl
} from "./actionTypes";
export async function fetchArticles() {
  const response = await fetch(`${baseUrl}/articles/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  return {
    type: FETCH_ARTICLES,
    payload: data
  };
}

export async function filterArticles(tags, search) {
  let filterTags = Array.from(
    Object.keys(tags),
    k => tags[k] === true && `${k}`
  )
    .filter(Boolean)
    .join(",");
  const response = await fetch(
    `${baseUrl}/search_articles/?tags=${[filterTags]}&search=${
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
    type: FILTER_ARTICLES,
    payload: data
  };
}

export function cleanArticles(id) {
  return {
    type: CLEAN_ARTICLES,
    payload: []
  };
}
export async function fetchArticle(id) {
  const response = await fetch(`${baseUrl}/articles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  return {
    type: FETCH_ARTICLE,
    payload: data
  };
}

export function cleanArticle(id) {
  return {
    type: CLEAN_ARTICLE,
    payload: {}
  };
}
