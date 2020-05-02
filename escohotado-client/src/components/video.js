import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteVideo } from "../actions/videos";

function Video({ video, t, language, admin }) {
  const [askDelete, setAskDelete] = useState(false);
  const dispatch = useDispatch();
  const videoSrc =
    video.url +
    "?wmode=opaque?autoplay=" +
    0 +
    "&rel=" +
    0 +
    "&modestbranding=" +
    1;

  const removeVideo = (id) => {
    dispatch(deleteVideo(id));
  };

  return (
    <div className={`resources-video ${admin && "resources-video--admin"}`}>
      {admin && (
        <div
          className={`resources-resource-admin ${
            askDelete && "resources-resource-admin--askDelete"
          }`}
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
                onClick={() => removeVideo(video.id)}
              >
                {t("article.delete")}
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <Link
                to={`/videos/${video.id}/edit`}
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
      <h3 className="resources-video-title resources-video-title--mobile">
        {video.title}
      </h3>
      <div className="resources-video-video">
        <iframe
          title={video.title}
          className="resources-video-video"
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
      </div>
      <div className="resources-video-details">
        <h3 className="resources-video-title">
          {language === "en" && video.title_en
            ? video.title_en
            : video.title_sp
            ? video.title_sp
            : ""}
        </h3>
        {language === "en" && !video.description_en && (
          <p className="articles-article-no-translation">
            Sorry, the description is not available in English.
          </p>
        )}
        <div>
          {language === "en" && video.description_en
            ? video.description_en
                .slice(0, 250)
                .split("<br />")
                .map((par, i) => {
                  return <p key={i}>{par}</p>;
                })
            : video.description_sp
            ? video.description_sp
                .slice(0, 250)
                .split("<br />")
                .map((par, i) => {
                  return <p key={i}>{par}</p>;
                })
            : ""}
          ...
        </div>
        <div>
          {Array.from(video.tags).map((tag) => (
            <span key={tag.name} className="articles-article-tag">
              {t(`categories.${[tag.name]}`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
