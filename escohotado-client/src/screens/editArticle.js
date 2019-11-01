import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, cleanArticle, editArticle } from "../actions/articles";
import Loading from "../components/loading";
import { useTranslation } from "react-i18next";

function Article({ match, location, history }) {
  const { t } = useTranslation();
  const path = location.pathname.split("/").pop();
  const fetchedArticle = useSelector(state => state.article);
  const [article, setArticle] = useState(fetchedArticle);
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(fetchArticle(match.params.id));
    },
    [dispatch, match.params.id]
  );

  useEffect(() => {
    return () => {
      dispatch(cleanArticle());
    };
  }, []); // eslint-disable-line

  useEffect(
    () => {
      if (fetchedArticle.updated) {
        history.push(`/articles`);
      } else {
        setArticle(fetchedArticle);
      }
    },
    [fetchedArticle, history]
  );

  const updateArticle = article => {
    dispatch(editArticle(article));
  };

  //    setText(text.replace(/\r?\n/g, "<br />"));
  return (
    <div className="screen">
      {article.empty && path === "edit" ? (
        <Loading />
      ) : (
        <div className="screen article-container">
          <div className="create-edit-article">
            <h1>Editar artículo</h1>
            <input
              className="create-edit-article-title"
              onChange={event =>
                setArticle({ ...article, title_sp: event.target.value })
              }
              placeholder="Título"
              defaultValue={article.title_sp}
            />
            <input
              className="create-edit-article-title"
              onChange={event =>
                setArticle({ ...article, title_en: event.target.value })
              }
              placeholder="Título en Ingles"
              defaultValue={article.title_en}
            />
            <input
              className="create-edit-article-title"
              onChange={event =>
                setArticle({ ...article, date: event.target.value })
              }
              placeholder="Fecha de publicacíon"
              defaultValue={article.date}
            />
            <p className="article-author">
              {t(`resource.by`)} Antonio Escohotado. {article.date}
            </p>

            <div className="create-edit-article-categories">
              {article.tags && ["philosophy", "comunism", "drugs", "history"].map(tag => (
                <span
                  key={tag}
                  className={`articles-article-tag articles-article-tag--${article.tags.some(
                    t => t.name === tag
                  ) && "selected"}`}
                  onClick={() =>
                    setArticle(t =>
                      article.tags.some(t => t.name === tag)
                        ? {
                            ...article,
                            tags: [
                              ...article["tags"].filter(ta => ta.name !== tag)
                            ]
                          }
                        : {
                            ...article,
                            tags: [...article["tags"], { name: tag }]
                          }
                    )
                  }
                >
                  {t(`categories.${[tag]}`)}
                  <i
                    className={`fa fa-${
                      article.tags.some(t => t.name === tag)
                        ? "times-circle"
                        : "plus-circle"
                    }`}
                  />
                </span>
              ))}
            </div>
            <img className="article-img" src={article.images} alt="article" />
            <textarea
              onChange={event =>
                setArticle({ ...article, body_sp: event.target.value })
              }
              className="create-edit-article-body"
              placeholder="Artículo en Español"
              defaultValue={article.body_sp}
            />
            <textarea
              onChange={event =>
                setArticle({ ...article, body_en: event.target.value })
              }
              className="create-edit-article-body"
              placeholder="Artículo en Inglés"
              defaultValue={article.body_en}
            />
            <button
              className="create-edit-article-button"
              onClick={() => updateArticle(article)}
            >
              Editar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
