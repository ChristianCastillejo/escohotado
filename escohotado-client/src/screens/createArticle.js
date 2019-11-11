import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle, cleanArticle } from "../actions/articles";
import { useTranslation } from "react-i18next";

function Article({ history }) {
  const { t } = useTranslation();
  const fetchedArticle = useSelector(state => state.article);
  const [article, setArticle] = useState({ tags: [] });
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(cleanArticle());
    };
  }, []); // eslint-disable-line

  useEffect(
    () => {
      if (fetchedArticle.id) {
        history.push(`/admin/articles`);
      }
    },
    [fetchedArticle, history]
  );
  const addArticle = () => {
    let updatedArticle = article;
    updatedArticle.body_sp =
      updatedArticle.body_sp &&
      updatedArticle.body_sp.replace(/(?:\r\n|\r|\n)/g, "<br />");
    updatedArticle.body_en =
      updatedArticle.body_en &&
      updatedArticle.body_en.replace(/(?:\r\n|\r|\n)/g, "<br />");
    dispatch(createArticle(updatedArticle));
  };

  return (
    <div className="screen">
      <div className="screen article-container">
        <div className="create-edit-article">
          <h1>Crear artículo</h1>
          <input
            className="create-edit-article-title"
            onChange={event =>
              setArticle({ ...article, title_sp: event.target.value })
            }
            placeholder="Título"
            value={article.title_sp || ""}
          />
          <input
            className="create-edit-article-title"
            onChange={event =>
              setArticle({ ...article, title_en: event.target.value })
            }
            placeholder="Título en Ingles"
            value={article.title_en || ""}
          />
          <input
            className="create-edit-article-title"
            onChange={event =>
              setArticle({ ...article, date: event.target.value })
            }
            placeholder="Fecha de publicacíon"
            value={article.date || ""}
          />
          <p className="article-author">
            {t(`resource.by`)} Antonio Escohotado. {article.date || ""}
          </p>

          <div className="create-edit-article-categories">
            {["philosophy", "comunism", "drugs", "history"].map(tag => (
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
          {/* <img className="article-img" src={article.images} alt="article" /> */}
          <textarea
            onChange={event =>
              setArticle({ ...article, body_sp: event.target.value })
            }
            className="create-edit-article-body"
            placeholder="Artículo en Español"
            value={article.body_sp || ""}
          />
          <textarea
            onChange={event =>
              setArticle({ ...article, body_en: event.target.value })
            }
            className="create-edit-article-body"
            placeholder="Artículo en Inglés"
            value={article.body_en || ""}
          />
          <button className="create-edit-article-button" onClick={addArticle}>
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
