import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import SearchBar from "../components/searchBar";
import Article from "../components/article";
import Video from "../components/video";
import {
  fetchArticles,
  filterArticles,
  cleanArticles
} from "../actions/articles";
import { fetchVideos, filterVideos, cleanVideos } from "../actions/videos";

function Articles(props) {
  const { history, location } = props;
  const path = location.pathname.substring(1);
  const articles = useSelector(state => state.articles);
  const videos = useSelector(state => state.videos);
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

  useEffect(
    () => {
      window.scrollTo(0, 0);
      path === "articles"
        ? dispatch(fetchArticles())
        : path === "videos" && dispatch(fetchVideos());
    },
    [dispatch, path]
  );

  function updateFilters(field, value, search) {
    let newFilters = { ...filters };
    if (value !== undefined) {
      newFilters[field] = value;
    }
    setFilters(newFilters);
    if (Object.keys(newFilters).every(k => !newFilters[k])) {
      if (search && search !== "") {
        path === "articles"
          ? dispatch(filterArticles(newFilters, search))
          : path === "videos" && dispatch(filterVideos(newFilters, search));
      } else {
        path === "articles"
          ? dispatch(fetchArticles())
          : path === "videos" && dispatch(fetchVideos());
      }
    } else {
      if (search) {
        path === "articles"
          ? dispatch(filterArticles(newFilters, search))
          : path === "videos" && dispatch(filterVideos(newFilters, search));
      } else {
        path === "articles"
          ? dispatch(filterArticles(newFilters, false))
          : path === "videos" && dispatch(filterVideos(newFilters, false));
      }
    }
    setText(search);
  }

  useEffect(
    () => {
      if (Object.keys(filters).every(k => !filters[k])) {
        window.scrollTo(0, 0);
        path === "articles"
          ? dispatch(fetchArticles())
          : path === "videos" && dispatch(fetchVideos());
      } else {
        window.scrollTo(0, 0);
        path === "articles"
          ? dispatch(filterArticles(filters, false))
          : path === "videos" && dispatch(filterVideos(filters, false));
      }
      if (search === "") {
        setText(search);
      }
    },
    [search === ""] // eslint-disable-line
  );

  useEffect(() => {
    return () => {
      path === "articles"
        ? dispatch(cleanArticles())
        : path === "videos" && dispatch(cleanVideos());
    };
  }, []); // eslint-disable-line

  return (
    <div className="screen">
      {path === "articles" && articles[0] === "clean" ? (
        <Loading />
      ) : path === "videos" && videos[0] === "clean" ? (
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
                  : path === "articles"
                  ? "Artículos"
                  : path === "videos"
                  ? "Videos"
                  : path === "books" && "Libros"}
              </h1>
            </div>
            {path === "articles" && articles.length === 0 ? (
              <p className="articles-error-message">
                {`Lo sentimos, no hay ningún artículo que incluya las categorías
            seleccionadas${text !== "" ? ` y el texto "${text}"` : ""}.`}
              </p>
            ) : path === "videos" && videos.length === 0 ? (
              <p className="articles-error-message">
                {`Lo sentimos, no hay ningún video que incluya las categorías
            seleccionadas${text !== "" ? ` y el texto "${text}"` : ""}.`}
              </p>
            ) : path === "articles" ? (
              articles.map(article => (
                <Article key={article.id} article={article} history={history} />
              ))
            ) : (
              path === "videos" &&
              videos.map(video => (
                <Video key={video.id} video={video} history={history} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;
