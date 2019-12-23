import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomVideos, cleanVideos } from "../actions/videos";
import Loading from "../components/loading";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const videos = useSelector(state => state.videos);
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, -100);
      dispatch(fetchRandomVideos());
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(cleanVideos());
    };
  }, []); // eslint-disable-line

  return (
    <div className="screen">
      {!videos[0].url ? (
        <Loading />
      ) : (
        <div className="home-container">
          <div className="home-hero-img">
            <div className="home-hero-text">Antonio Escohotado</div>
          </div>
          <div className="home-video">
            <h2>{t("menu.videos")}</h2>
            <div className="home-videos">
              <iframe
                title="alvaro action"
                type="text/html"
                src={
                  videos[0].url.split("?")[0] +
                  "?autoplay=" +
                  1 +
                  "&rel=" +
                  0 +
                  "&modestbranding=" +
                  1 +
                  "&mute=" +
                  1
                }
                wmode="Opaque"
                autoPlay="1"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              />
              <iframe
                title="alvaro action"
                type="text/html"
                src={
                  videos[1].url +
                  "?wmode=opaque?autoplay=" +
                  0 +
                  "&rel=" +
                  0 +
                  "&modestbranding=" +
                  1 +
                  "&mute" +
                  1
                }
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
              <button>
                <Link to="/videos">
                  <i className="fa fa-plus" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
