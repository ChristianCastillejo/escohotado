import { FETCH_ARTICLES, FILTER_ARTICLES } from "./actionTypes";

export async function fetchArticles() {
  const response = await fetch("http://localhost:4000/articles/", {
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

export async function filterArticles(tags) {
  let filterTags = Array.from(
    Object.keys(tags),
    k => tags[k] === true && `${k}`
  )
    .filter(Boolean)
    .join(",");
  const response = await fetch(
    `http://localhost:4000/search_articles/?tags=${[filterTags]}`,
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
