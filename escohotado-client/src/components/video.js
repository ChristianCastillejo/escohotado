import React from "react";

const categories = {
  philosophy: "Filosofía",
  comunism: "Comunismo",
  drugs: "Drogas",
  ecomomy: "Economía",
  history: "Historia"
};

function Video({ video, history }) {
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
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        />
      </div>
      <div className="resources-video-details">
        <h3 className="resources-video-title">{video.title}</h3>
        <p>{video.description.slice(0, 250)}</p>
        {Array.from(video.tags).map(tag => (
          <span key={tag.name} className="articles-article-tag">
            {categories[tag.name]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Video;
