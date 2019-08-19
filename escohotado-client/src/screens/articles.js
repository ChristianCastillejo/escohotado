import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, filterArticles } from "../actions/articles";

const categories = {
  philosophy: "Filosofía",
  comunism: "Comunismo",
  drugs: "Drogas",
  ecomomy: "Economía",
  history: "Historia"
};
function Articles(props) {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    philosophy: false,
    comunism: false,
    drugs: false,
    ecomomy: false,
    history: false,
    general: false
  });

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(fetchArticles());
    },
    [dispatch]
  );

  function updateFilters(field, value) {
    let newFilters = { ...filters };
    newFilters[field] = value;
    setFilters(newFilters);
    if (Object.keys(newFilters).every(k => !newFilters[k])) {
      dispatch(fetchArticles());
    } else {
      dispatch(filterArticles(newFilters));
    }
  }

  return (
    <div className="screen articles-container">
      <div className="articles-articles">
        <div className="articles-header">
          <h1>Artículos</h1>
          {Object.values(filters).every(e => e === false) ? (
            <p className="articles-header-p articles-header-p--hidden" />
          ) : (
            <p className="articles-header-p">Filtros activados</p>
          )}
          <div
            className="articles-filter-button"
            onClick={() => setOpenFilter(!openFilter)}
          >
            <i className="fas fa-sliders-h" />
          </div>
        </div>
        <div
          className={`articles-filter articles-filter${!openFilter &&
            "--close"}`}
        >
          <div
            onClick={() => updateFilters("philosophy", !filters.philosophy)}
            className={`articles-filter-item articles-filter-item${filters.philosophy &&
              "--selected"}`}
          >
            Filosofía
          </div>
          <div
            onClick={() => updateFilters("comunism", !filters.comunism)}
            className={`articles-filter-item articles-filter-item${filters.comunism &&
              "--selected"}`}
          >
            Comunismo
          </div>
          <div
            onClick={() => updateFilters("drugs", !filters.drugs)}
            className={`articles-filter-item articles-filter-item${filters.drugs &&
              "--selected"}`}
          >
            Drogas
          </div>
          <div
            onClick={() => updateFilters("history", !filters.history)}
            className={`articles-filter-item articles-filter-item${filters.history &&
              "--selected"}`}
          >
            Historia
          </div>
        </div>
        {articles.length === 0 ? (
          <p className="articles-error-message">
            Lo sentimos, no hay ningún artículo que incluya las categorías
            seleccionadas.
          </p>
        ) : (
          articles.map(article => (
            <div
              key={article.id}
              className="articles-article"
              onClick={() => props.history.push(`/articles/${article.id}`)}
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
                  <span className="articles-article-body-continue">
                    ... Segir leyendo
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
          ))
        )}
      </div>
    </div>
  );
}

export default Articles;
