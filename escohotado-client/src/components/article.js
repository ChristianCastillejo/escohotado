import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../actions/articles";

function Article({ article, history, t, language, admin }) {
  const [askDelete, setAskDelete] = useState(false);
  const dispatch = useDispatch();

  const removeArticle = id => {
    dispatch(deleteArticle(id));
  };

  return (
    <div
      className={`articles-article ${admin && "articles-article--admin"}`}
      onClick={
        !admin ? () => history.push(`/articles/${article.id}`) : undefined
      }
    >
      {admin && (
        <div
          className={`resources-resource-admin ${askDelete &&
            "resources-resource-admin--askDelete"}`}
        >
          {askDelete ? (
            <Fragment>
              <p>{t("article.askDelete")}</p>
              <button
                className="resources-resource-delete resources-resource-delete--no"
                onClick={() => setAskDelete(false)}
              >
                {t("article.cancel")}
              </button>
              <button
                className="resources-resource-delete resources-resource-delete--yes"
                onClick={() => removeArticle(article.id)}
              >
                {t("article.delete")}
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <Link
                to={`/articles/${article.id}`}
                className="resources-resource-review"
              >
                <i className={`fa fa-eye`} />
              </Link>
              <Link
                to={`/articles/${article.id}/edit`}
                className="resources-resource-edit"
              >
                <i className={`fa fa-edit`} />
              </Link>
              <button
                className="resources-resource-delete"
                onClick={() => setAskDelete(true)}
              >
                <i className={`fa fa-trash-alt`} />
              </button>
            </Fragment>
          )}
        </div>
      )}
      <img
        alt="article"
        className="articles-article-img"
        src={
          article.images ||
          "https://www.ocultalit.com/wp-content/uploads/2017/02/morralla-filosof%C3%ADa.jpg"
        }
      />
      <div className="articles-article-details">
        <h3 className="articles-article-title">
          {language === "en" && article.title_en
            ? article.title_en
            : article.title_sp || ""}
        </h3>
        {language === "en" && !article.body_en && (
          <p className="articles-article-no-translation">
            Sorry, this article is not translated into English. It is only
            available in Spanish.
          </p>
        )}
        <div className="articles-article-body">
          {language === "en" && article.body_en
            ? article.body_en
                .slice(0, 200)
                .split("<br />")
                .map((par, i) => {
                  return <p key={i}>{par}</p>;
                })
            : article.body_sp &&
              article.body_sp
                .slice(0, 200)
                .split("<br />")
                .map((par, i) => {
                  return <p key={i}>{par}</p>;
                })}
          <span className="articles-article-body-more">
            {language === "en" && article.body_en
              ? article.body_en
                  .slice(200, 500)
                  .split("<br />")
                  .map((par, i) => {
                    return <p key={i}>{par}</p>;
                  })
              : article.body_sp &&
                article.body_sp
                  .slice(200, 500)
                  .split("<br />")
                  .map((par, i) => {
                    return <p key={i}>{par}</p>;
                  })}
          </span>
          ...
          <span className="articles-article-body-continue">
            {t("article.continue")}
          </span>
        </div>
        <div>
          {Array.from(article.tags).map(tag => (
            <span key={tag.name} className="articles-article-tag">
              {t(`categories.${[tag.name]}`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
