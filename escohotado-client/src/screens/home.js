import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return <div className="screen home-container">{t("home.info")}</div>;
}

export default Home;
