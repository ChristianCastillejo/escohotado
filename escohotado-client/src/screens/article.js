import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, cleanArticle } from "../actions/articles";
import Loading from "../components/loading";
import { useTranslation } from "react-i18next";

function Article({ match }) {
  const { t, i18n } = useTranslation();
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
              {t(`resource.day`)}
            </div>
            <div
              className="article-settings-sepia"
              onClick={() => setTheme("sepia")}
            >
              {t(`resource.sepia`)}
            </div>
            <div
              className="article-settings-dark"
              onClick={() => setTheme("dark")}
            >
              {t(`resource.night`)}
            </div>
          </div>
          <div className="article">
            <h1 className="article-title">
              {i18n.language === "en" && article.title_en
                ? article.title_en
                : article.title_sp}{" "}
            </h1>
            {i18n.language === "en" && !article.body_en && (
              <p className="articles-article-no-translation">
                Sorry, this article is not translated into English. It is only
                available in Spanish.
              </p>
            )}
            <p className="article-author">
              {t(`resource.by`)} Antonio Escohotado. {article.date}
            </p>
            {article.tags &&
              article.tags.map(tag => (
                <span key={tag.name} className="articles-article-tag">
                  {t(`categories.${[tag.name]}`)}
                </span>
              ))}
            <img className="article-img" src={article.images || "https://www.ocultalit.com/wp-content/uploads/2017/02/morralla-filosof%C3%ADa.jpg"} alt="article" />
            <div className="article-body" style={{ fontSize }}>
              {i18n.language === "en" && article.body_en
                ? article.body_en.split("<br />").map((par, i) => {
                    return <p key={i}>{par}</p>;
                  })
                : article.body_sp.split("<br />").map((par, i) => {
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
