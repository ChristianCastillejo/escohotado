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
import { useTranslation } from "react-i18next";

function Articles(props) {
  const { history, location } = props;
  const { t, i18n } = useTranslation();
  const path = location.pathname.split("/").pop();
  const admin = location.pathname.includes("admin");
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
      window.scrollTo(0, -100);
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
              t={t}
            />
            <div className="articles-header">
              <h1>
                {!path
                  ? t("resources.resources")
                  : path === "articles"
                  ? t("resources.articles")
                  : path === "videos"
                  ? t("resources.videos")
                  : path === "books" && t("resources.books")}
              </h1>
            </div>
            {path === "articles" && articles.length === 0 ? (
              <p className="articles-error-message">
                {t("resources.msgNoResources1articles") +
                  (text !== ""
                    ? t("resources.msgNoResources2") + text + "."
                    : ".")}
              </p>
            ) : path === "videos" && videos.length === 0 ? (
              <p className="articles-error-message">
                {t("resources.msgNoResources1videos") +
                  (text !== ""
                    ? t("resources.msgNoResources2") + text + "."
                    : ".")}
              </p>
            ) : path === "articles" ? (
              articles.map(article => (
                <Article
                  key={article.id}
                  article={article}
                  history={history}
                  language={i18n.language}
                  t={t}
                  admin={admin}
                />
              ))
            ) : (
              path === "videos" &&
              videos.map(video => (
                <Video
                  key={video.id}
                  video={video}
                  history={history}
                  language={i18n.language}
                  t={t}
                  admin={admin}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;
