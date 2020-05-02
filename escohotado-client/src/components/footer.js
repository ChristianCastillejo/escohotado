import React from "react";

function Menu() {
  return (
    <div className="footer">
      <p>Antonio Escohotado 2020.</p>
      <div className="social-network">
        <a
          href="https://www.facebook.com/AEscohotado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://twitter.com/AEscohotado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.instagram.com/escohotado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCks2FdxaBZZFl4PTBAGz4Jw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" />
        </a>
      </div>
      <a href="https://ezsoftware.io" target="_blank" rel="noopener noreferrer">
        <p>Creado por Christian Castillejo</p>
      </a>
    </div>
  );
}

export default Menu;
