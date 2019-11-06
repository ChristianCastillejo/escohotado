import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return <div className="screen home-container">{t("login")}</div>;
}

export default Home;
