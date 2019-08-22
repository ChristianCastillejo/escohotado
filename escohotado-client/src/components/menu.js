import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      <div className={`menu-container menu-container${!openMenu && "--close"}`}>
        <Link
          className={`menu-item-name${openMenu && "--mobile"}`}
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
