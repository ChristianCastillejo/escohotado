import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../actions/articles";

function Article({match}) {
  const article = useSelector(state => state.article);
  const dispatch = useDispatch();
  const [openSettings, setOpenSettings] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(
    () => {
      dispatch(fetchArticle(match.params.id));
      window.scrollTo(0, 0);
    },
    []
  );

  function toggleSetings() {
    setOpenSettings(!openSettings);
  }

  return (
    <div className={`screen article-container article-container--${theme}`}>
      <div
        className={`article-settings ${openSettings &&
          "article-settings--open"}`}
        onClick={() => toggleSetings()}
      >
        <div className="article-settings-icon">
          <i className="fa fa-moon" />
        </div>
        <div
          className="article-settings-light"
          onClick={() => setTheme("light")}
        >
          Día
        </div>
        <div
          className="article-settings-sepia"
          onClick={() => setTheme("sepia")}
        >
          Sepia
        </div>
        <div className="article-settings-dark" onClick={() => setTheme("dark")}>
          Noche
        </div>
      </div>
      <div className="article">
        <h1 className="article-title">{article.title} </h1>
        <p className="article-author">Por Antonio Escohotado. {article.date}</p>
        {article.tags &&
          article.tags.map(tag => (
            <span key={tag.name} className="articles-article-tag">{tag.name}</span>
          ))}
        <img className="article-img" src={article.images} alt="article"/>
        <p className="article-body">{article.body} </p>
      </div>
    </div>
  );
}

export default Article;
