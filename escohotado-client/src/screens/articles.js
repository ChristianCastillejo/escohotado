import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../actions/articles";

function Articles() {
  const articlesStore = useSelector(state => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return <div className="screen">Artículos </div>;
}

export default Articles;
