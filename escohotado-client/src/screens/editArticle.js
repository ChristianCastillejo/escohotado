import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, cleanArticle, editArticle } from "../actions/articles";
import Loading from "../components/loading";
import { useTranslation } from "react-i18next";

function Article({ match }) {
  const { t, i18n } = useTranslation();
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
      setArticle(fetchedArticle);
    },
    [fetchedArticle]
  );
  console.log(article);
  //    setText(text.replace(/\r?\n/g, "<br />"));
  return (
    <div className="screen">
      {article.empty ? (
        <Loading />
      ) : (
        <div className="screen article-container">
          <div className="edit-article">
            <h1>Editar artículo</h1>
            <input
              className="edit-article-title"
              onChange={event =>
                setArticle({ ...article, title_sp: event.target.value })
              }
              placeholder="Título"
              value={article.title_sp}
            />
            <input
              className="edit-article-title"
              onChange={event =>
                setArticle({ ...article, title_en: event.target.value })
              }
              placeholder="Título en Ingles"
              value={article.title_en}
            />
            <input
              className="edit-article-title"
              onChange={event =>
                setArticle({ ...article, date: event.target.value })
              }
              placeholder="Fecha de publicacíon"
              value={article.date}
            />
            <p className="article-author">
              {t(`resource.by`)} Antonio Escohotado. {article.date}
            </p>

            <div className="edit-article-categories">
              {["philosophy", "comunism", "drugs", "history"].map(tag => (
                <span
                  key={tag}
                  className={`articles-article-tag articles-article-tag--${article.tags.some(
                    t => t.name === tag
                  ) && "selected"}`}
                  onClick={() =>
                    setArticle(t =>
                      article.tags.some(
                        t => t.name === tag
                      )
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
                  {t(`categories.${[tag]}`)}{" "}
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
              className="edit-article-body"
              placeholder="Artículo en Español"
            />
            <textarea
              onChange={event =>
                setArticle({ ...article, body_en: event.target.value })
              }
              className="edit-article-body"
              placeholder="Artículo en Inglés"
            />
            <button className="edit-article-button" onClick={()=>editArticle()}>
              Editar
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
