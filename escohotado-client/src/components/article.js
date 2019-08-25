import React from "react";

const categories = {
  philosophy: "Filosofía",
  comunism: "Comunismo",
  drugs: "Drogas",
  ecomomy: "Economía",
  history: "Historia"
};

function Article({ article, history }) {
  return (
    <div
      key={article.id}
      className="articles-article"
      onClick={() => history.push(`/resource/${article.id}`)}
    >
      <img
        alt="article"
        className="articles-article-img"
        src={article.images}
      />
      <div className="articles-article-details">
        <h3 className="articles-article-title">{article.title}</h3>
        <p className="articles-article-body">
          {article.body.slice(0, 250)}
          <span className="articles-article-body-more">
            {article.body.slice(250, 600)}
          </span>
          ...
          <span className="articles-article-body-continue">
            {" Seguir leyendo"}
          </span>
        </p>
        <div>
          {Array.from(article.tags).map(tag => (
            <span key={tag.name} className="articles-article-tag">
              {categories[tag.name]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
