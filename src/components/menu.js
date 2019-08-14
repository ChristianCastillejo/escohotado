import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      <div className={`menu-container menu-container${!openMenu && "--close"}`}>
        <div className="menu-logo">
          <img className="menu-logo-img" src={Logo} alt="logo" />
        </div>
        <Link className="menu-item" to="/" onClick={() => setOpenMenu(false)}>
          <p className="menu-item-p">Inicio</p>
        </Link>
        <Link
          className="menu-item"
          to="/articles"
          onClick={() => setOpenMenu(false)}
        >
          <p className="menu-item-p">Artículos</p>
        </Link>
      </div>
      <div className="mobile-layout">
        <div className="mobile-layout-title"> Antonio Escohotado</div>
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
