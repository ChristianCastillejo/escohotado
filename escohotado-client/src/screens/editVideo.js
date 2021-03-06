import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo, editVideo, cleanVideo } from "../actions/videos";
import { useTranslation } from "react-i18next";

function Video({ match, history }) {
  const { t } = useTranslation();
  const fetchedVideo = useSelector(state => state.video);
  const [video, setVideo] = useState({ tags: [] });
  const dispatch = useDispatch();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(fetchVideo(match.params.id));
    },
    [dispatch, match.params.id]
  );

  useEffect(
    () => {
      setVideoSrc(
        (
          video.url +
          "?wmode=opaque?autoplay=" +
          0 +
          "&rel=" +
          0 +
          "&modestbranding=" +
          1
        )
          .replace("watch?v=", "embed/")
          .split("&")[0]
      );
    },
    [video.url]
  );

  useEffect(() => {
    return () => {
      dispatch(cleanVideo());
    };
  }, []); // eslint-disable-line

  useEffect(
    () => {
      if (fetchedVideo.updated) {
        history.push(`/admin/videos`);
      } else {
        setVideo(fetchedVideo);
      }
    },
    [fetchedVideo, history]
  );

  const updateVideo = () => {
    let newVideo = {
      ...video,
      url: (
        video.url +
        "?wmode=opaque?autoplay=" +
        0 +
        "&rel=" +
        0 +
        "&modestbranding=" +
        1
      )
        .replace("watch?v=", "embed/")
        .split("&")[0]
    };
    newVideo.description_sp =
      newVideo.description_sp &&
      newVideo.description_sp.replace(/(?:\r\n|\r|\n)/g, "<br />");
    newVideo.body_en =
      newVideo.description_en &&
      newVideo.description_en.replace(/(?:\r\n|\r|\n)/g, "<br />");
    dispatch(editVideo(newVideo));
  };

  //    setText(text.replace(/\r?\n/g, "<br />"));
  return (
    <div className="screen">
      <div className="screen video-container">
        <div className="create-edit-article">
          <h1>Crear vídeo</h1>
          <input
            className="create-edit-article-title"
            onChange={event =>
              setVideo({ ...video, title_sp: event.target.value })
            }
            placeholder="Título en español"
            value={video.title_sp || ""}
          />
          <input
            className="create-edit-article-title"
            onChange={event =>
              setVideo({ ...video, title_en: event.target.value })
            }
            placeholder="Título en Ingles"
            value={video.title_en || ""}
          />
          <input
            className="create-video-article-description"
            onChange={event => setVideo({ ...video, url: event.target.value })}
            placeholder="URL del video de YouTube"
            value={video.url || ""}
          />
          {videoSrc.includes("https://www.youtube.com") && (
            <iframe
              className="create-video-iframe"
              title={video.title}
              type="text/html"
              src={videoSrc.replace("watch?v=", "embed/")}
              wmode="Opaque"
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            />
          )}
          <textarea
            className="create-edit-article-body"
            onChange={event =>
              setVideo({ ...video, description_sp: event.target.value })
            }
            placeholder="Descripción en español"
            value={
              video.description_sp
                ? video.description_sp.replace(/<br\s*\/?>/gi, "\n")
                : ""
            }
          />
          <textarea
            className="create-video-article-description"
            onChange={event =>
              setVideo({ ...video, description_en: event.target.value })
            }
            placeholder="Descripción en inglés"
            value={
              video.description_en
                ? video.description_en.replace(/<br\s*\/?>/gi, "\n")
                : ""
            }
          />
          <div className="create-edit-article-categories">
            {video.tags &&
              ["philosophy", "comunism", "drugs", "history"].map(tag => (
                <span
                  key={tag}
                  className={`articles-article-tag articles-article-tag--${video.tags.some(
                    t => t.name === tag
                  ) && "selected"}`}
                  onClick={() =>
                    setVideo(t =>
                      video.tags.some(t => t.name === tag)
                        ? {
                            ...video,
                            tags: [
                              ...video["tags"].filter(ta => ta.name !== tag)
                            ]
                          }
                        : {
                            ...video,
                            tags: [...video["tags"], { name: tag }]
                          }
                    )
                  }
                >
                  {t(`categories.${[tag]}`)}{" "}
                  <i
                    className={`fa fa-${
                      video.tags.some(t => t.name === tag)
                        ? "times-circle"
                        : "plus-circle"
                    }`}
                  />
                </span>
              ))}
          </div>
          <button
            className="create-edit-article-button"
            onClick={() => updateVideo()}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
