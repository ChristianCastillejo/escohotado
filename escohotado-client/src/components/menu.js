import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      <div className={`menu-container menu-container${!openMenu && "--close"}`}>
        <Link
          className={`menu-item-name${openMenu ? "--mobile" : ""}`}
          to="/"
          onClick={() => setOpenMenu(false)}
        >
          <p>{openMenu ? "Inicio" : "Antonio Escohotado"}</p>
        </Link>
        <Link
          className="menu-item"
          to="/articles"
          onClick={() => setOpenMenu(false)}
        >
          <p className="menu-item-p">{t("menu.articles")}</p>
        </Link>
        <Link
          className="menu-item"
          to="/videos"
          onClick={() => setOpenMenu(false)}
        >
          <p className="menu-item-p">{t("menu.videos")}</p>
        </Link>
        {/* <Link
          className="menu-item"
          to="/books"
          onClick={() => setOpenMenu(false)}
        >
          <p className="menu-item-p">Libros</p>
        </Link> */}
        <div className="menu-item">
          <button onClick={() => changeLanguage("es")}>es</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </div>
      <div className="mobile-layout">
        <Link className="mobile-layout-title" to="/">
          <p>Antonio Escohotado</p>
        </Link>
        <div
          className="mobile-layout-icon"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className={`fa fa-${openMenu ? "times" : "bars"}`} />
        </div>
      </div>
    </Fragment>
  );
}

export default Menu;
