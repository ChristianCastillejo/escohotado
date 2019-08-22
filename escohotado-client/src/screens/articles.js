import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  filterArticles,
  cleanArticles
} from "../actions/articles";
import Loading from "../components/loading";

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
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [filters, setFilters] = useState({
    philosophy: false,
    comunism: false,
    drugs: false,
    ecomomy: false,
    history: false,
    general: false
  });

  function updateFilters(field, value, search) {
    let newFilters = { ...filters };
    if (value !== undefined) {
      newFilters[field] = value;
    }
    setFilters(newFilters);
    if (Object.keys(newFilters).every(k => !newFilters[k])) {
      if (search && search !== "") {
        dispatch(filterArticles(newFilters, search));
      } else {
        dispatch(fetchArticles());
      }
    } else {
      if (search) {
        dispatch(filterArticles(newFilters, search));
      } else {
        dispatch(filterArticles(newFilters, false));
      }
    }
    setText(search);
  }

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(fetchArticles());
    },
    [dispatch]
  );

  useEffect(
    () => {
      if (Object.keys(filters).every(k => !filters[k])) {
        dispatch(fetchArticles());
      } else {
        dispatch(filterArticles(filters, false));
      }
      if (search === "") {
        setText(search);
      }
    },
    [search === ""] // eslint-disable-line
  );

  useEffect(() => {
    return () => {
      dispatch(cleanArticles());
    };
  }, []); // eslint-disable-line

  return (
    <div className="screen">
      {articles[0] === "clean" ? (
        <Loading />
      ) : (
        <div className="articles-container">
          <div className="articles-articles">
            <div className="articles-header">
              <h1>Artículos</h1>
              {Object.values(filters).some(e => e === true) || text !== "" ? (
                <p className="articles-header-p">Filtros activados</p>
              ) : (
                <p className="articles-header-p articles-header-p--hidden" />
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
              <div className="articles-filter-categories">
                <div
                  onClick={() =>
                    updateFilters("philosophy", !filters.philosophy, search)
                  }
                  className={`articles-filter-item articles-filter-item${filters.philosophy &&
                    "--selected"}`}
                >
                  Filosofía
                </div>
                <div
                  onClick={() =>
                    updateFilters("comunism", !filters.comunism, search)
                  }
                  className={`articles-filter-item articles-filter-item${filters.comunism &&
                    "--selected"}`}
                >
                  Comunismo
                </div>
                <div
                  onClick={() => updateFilters("drugs", !filters.drugs, search)}
                  className={`articles-filter-item articles-filter-item${filters.drugs &&
                    "--selected"}`}
                >
                  Drogas
                </div>
                <div
                  onClick={() =>
                    updateFilters("history", !filters.history, search)
                  }
                  className={`articles-filter-item articles-filter-item${filters.history &&
                    "--selected"}`}
                >
                  Historia
                </div>
              </div>
              <div className="articles-filter-search">
                <div className="articles-filter-search-title">
                  Buscar por palabras en el titulo o en el contenido:
                </div>
                <input
                  className="articles-filter-search-input"
                  placeholder="De la piel para adentro..."
                  onChange={e => setSearch(e.target.value)}
                />
                <button
                  className="articles-filter-search-button"
                  onClick={() => updateFilters(undefined, undefined, search)}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            {articles.length === 0 ? (
              <p className="articles-error-message">
                {`Lo sentimos, no hay ningún artículo que incluya las categorías
            seleccionadas${text !== "" ? ` y el texto "${text}"` : ""}.`}
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
                      ...
                      <span className="articles-article-body-continue">
                        Segir leyendo
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
      )}
    </div>
  );
}

export default Articles;
