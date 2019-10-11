import React from "react";

function Video({ video, t, language }) {
  const videoSrc =
    video.url +
    "?wmode=opaque?autoplay=" +
    0 +
    "&rel=" +
    0 +
    "&modestbranding=" +
    1;
  return (
    <div className="resources-video">
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
            : video.title_sp}
        </h3>
        {language === "en" && !video.description_en && (
          <p className="articles-article-no-translation">
            Sorry, the description is not available in English.
          </p>
        )}
        <p>
          {language === "en" && video.description_en
            ? video.description_en.slice(0, 250)
            : video.description_sp.slice(0, 250)}
          ...
        </p>
        {Array.from(video.tags).map(tag => (
          <span key={tag.name} className="articles-article-tag">
            {t(`categories.${[tag.name]}`)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Video;
