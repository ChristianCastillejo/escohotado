import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../actions/articles";

function Article({ match }) {
  const article = useSelector(state => state.article);
  const dispatch = useDispatch();
  const [openSettings, setOpenSettings] = useState(false);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(21);

  useEffect(
    () => {
      dispatch(fetchArticle(match.params.id));
      window.scrollTo(0, 0);
    },
    [dispatch, match.params.id]
  );

  function toggleSetings() {
    setOpenSettings(!openSettings);
  }

  return (
    <div className={`screen article-container article-container--${theme}`} onClick={() => openSettings && toggleSetings(false)}>
      <div
        className={`article-settings ${openSettings &&
          "article-settings--open"}`}
        onClick={() => !openSettings && toggleSetings(true)}
      >
        <div className="article-settings-icon">
          <i className="fa fa-text-height" />
        </div>
        <div className="article-settings-font" onClick={() => setFontSize(fontSize -1)}>
        <i className="fa fa-minus" />
        </div>
        <div className="article-settings-font" onClick={() => fontSize < 34 && setFontSize(fontSize+1)}>
        <i className="fa fa-plus" />
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
      <div className="article"         
>
        <h1 className="article-title">{article.title} </h1>
        <p className="article-author">Por Antonio Escohotado. {article.date}</p>
        {article.tags &&
          article.tags.map(tag => (
            <span key={tag.name} className="articles-article-tag">
              {tag.name}
            </span>
          ))}
        <img className="article-img" src={article.images} alt="article" />
        <p className="article-body" style={{fontSize}}>{article.body} </p>
      </div>
    </div>
  );
}

export default Article;
