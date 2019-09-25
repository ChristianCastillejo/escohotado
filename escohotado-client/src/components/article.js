import React from "react";

function Article({ article, history, t, language }) {
  return (
    <div
      className="articles-article"
      onClick={() => history.push(`/articles/${article.id}`)}
    >
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
            Sorry, this article is not translated into English. It is only available in Spanish.
          </p>
        )}
        <p className="articles-article-body">
          {language === "en" && article.body_en
            ? article.body_en.slice(0, 250)
            : article.body_sp.slice(0, 250)}
          <span className="articles-article-body-more">
            {language === "en" && article.body_en
              ? article.body_en.slice(250, 600)
              : article.body_sp.slice(250, 600)}
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
