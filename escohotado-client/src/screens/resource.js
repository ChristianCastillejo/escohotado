import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, cleanArticle } from "../actions/articles";
import Loading from "../components/loading";

const categories = {
  philosophy: "Filosofía",
  comunism: "Comunismo",
  drugs: "Drogas",
  ecomomy: "Economía",
  history: "Historia"
};

function Article({ match }) {
  const article = useSelector(state => state.article);
  const dispatch = useDispatch();
  const [openSettings, setOpenSettings] = useState(false);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(21);

  function editFontSize(e, fontSize) {
    e.stopPropagation();
    setFontSize(fontSize);
  }

  useEffect(
    () => {
      dispatch(fetchArticle(match.params.id));
      window.scrollTo(0, 0);
    },
    [dispatch, match.params.id]
  );

  useEffect(() => {
    return () => {
      dispatch(cleanArticle());
    };
  }, []); // eslint-disable-line

  //    setText(text.replace(/\r?\n/g, "<br />"));
  return (
    <div className="screen">
      {article.empty ? (
        <Loading />
      ) : (
        <div
          className={`screen article-container article-container--${theme}`}
          onClick={() => openSettings && setOpenSettings(false)}
        >
          <div
            className={`article-settings ${openSettings &&
              "article-settings--open"}`}
            onClick={() => !openSettings && setOpenSettings(true)}
          >
            <div className="article-settings-icon">
              <i className="fa fa-text-height" />
            </div>
            <div
              className="article-settings-font"
              onClick={e => fontSize > 10 && editFontSize(e, fontSize - 1)}
            >
              <i className="fa fa-minus" />
            </div>
            <div
              className="article-settings-font"
              onClick={e => fontSize < 34 && editFontSize(e, fontSize + 1)}
            >
              <i className="fa fa-plus" />
            </div>
            <div
              className="article-settings-light"
              onClick={e => setTheme("light")}
            >
              Día
            </div>
            <div
              className="article-settings-sepia"
              onClick={() => setTheme("sepia")}
            >
              Sepia
            </div>
            <div
              className="article-settings-dark"
              onClick={() => setTheme("dark")}
            >
              Noche
            </div>
          </div>
          <div className="article">
            <h1 className="article-title">{article.title} </h1>
            <p className="article-author">
              Por Antonio Escohotado. {article.date}
            </p>
            {article.tags &&
              article.tags.map(tag => (
                <span key={tag.name} className="articles-article-tag">
                  {categories[tag.name]}
                </span>
              ))}
            <img className="article-img" src={article.images} alt="article" />
            <div className="article-body" style={{ fontSize }}>
              {article.body.split("<br />").map((par, i) => {
                return <p key={i}>{par}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
