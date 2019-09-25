import React, { useState, Fragment} from "react";
import { Link } from "react-router-dom";

function Article({ article, history, t, language, admin }) {
  const [askDelete, setAskDelete] = useState(false);

  return (
    <div
      className={`articles-article ${admin && "articles-article--admin"}`}
      onClick={!admin && (() => history.push(`/articles/${article.id}`))}
    >
      {admin && (
        <div className={`articles-article-admin ${askDelete && "articles-article-admin--askDelete"}`}>
          {askDelete ? (
            <Fragment>
          <p>{t("article.askDelete")}</p>
          <button className="articles-article-delete articles-article-delete--no"
          onClick={() => setAskDelete(false)}>
          {t("article.cancel")}</button>
          <button className="articles-article-delete articles-article-delete--yes"
          onClick={() => setAskDelete(true)}>
          {t("article.delete")}</button>
          </Fragment>):
          (  
            <Fragment>      <Link
            to={`/articles/${article.id}`}
            className="articles-article-review"
          >
          <i className={`fa fa-eye`} />
          </Link>
          <Link
            to={`/articles/${article.id}/edit`}
            className="articles-article-edit"
          >
          <i className={`fa fa-edit`} />
          </Link>
          <button className="articles-article-delete"
          onClick={() => setAskDelete(true)}>
          <i className={`fa fa-trash-alt`} /></button> </Fragment>)}
        </div>
      )}
      <img
        alt="article"
        className="articles-article-img"
        src={article.images}
      />
      <div className="articles-article-details">
        <h3 className="articles-article-title">
          {language === "en" && article.title_en
            ? article.title_en
            : article.title_sp}
        </h3>
        {language === "en" && !article.body_en && (
          <p className="articles-article-no-translation">
            Sorry, this article is not translated into English. It is only
            available in Spanish.
          </p>
        )}
        <p className="articles-article-body">
          {language === "en" && article.body_en
            ? article.body_en.slice(0, 200)
            : article.body_sp.slice(0, 200)}
          <span className="articles-article-body-more">
            {language === "en" && article.body_en
              ? article.body_en.slice(200, 500)
              : article.body_sp.slice(200, 500)}
          </span>
          ...
          <span className="articles-article-body-continue">
            {t("article.continue")}
          </span>
        </p>
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
