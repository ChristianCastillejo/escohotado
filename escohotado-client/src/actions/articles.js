import { FETCH_ARTICLES } from "./actionTypes";

export async function fetchArticles() {
  const response = await fetch("http://localhost:4000/articles/",{
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }})
  const data = await response.json();

  return {
    type: FETCH_ARTICLES,
    payload: data
  };
}