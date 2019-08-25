import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import SearchBar from "../components/searchBar";
import Article from "../components/article";
import {
  fetchArticles,
  filterArticles,
  cleanArticles
} from "../actions/articles";

function Articles(props) {
  const { history } = props;
  const path = history.location.state;
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
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
            <SearchBar
              openSearch={openSearch}
              setOpenSearch={setOpenSearch}
              search={search}
              setSearch={setSearch}
              filters={filters}
              updateFilters={updateFilters}
            />
            <div className="articles-header">
              <h1>
                {!path
                  ? "Recursos"
                  : path.articles
                  ? "Artículos"
                  : path.videos
                  ? "Videos"
                  : path.books && "Libros"}{" "}
              </h1>
            </div>
            {articles.length === 0 ? (
              <p className="articles-error-message">
                {`Lo sentimos, no hay ningún artículo que incluya las categorías
            seleccionadas${text !== "" ? ` y el texto "${text}"` : ""}.`}
              </p>
            ) : (
              articles.map(article => (
                <Article article={article} history={history} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;
