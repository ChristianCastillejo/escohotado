import React from "react";
import Fade from "react-reveal/Fade";

function Menu() {
  return (
    <div className="footer">
      <Fade right cascade>
        <p>Antonio Escohotado 2019.</p>
        <a href="https://ezsoftware.io">
          <p>Creado por Christian Castillejo</p>
        </a>
      </Fade>
    </div>
  );
}

export default Menu;
