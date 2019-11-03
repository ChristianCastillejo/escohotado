import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="screen admin-container">
      <h1>Panel de administrador</h1>
      <div className="admin-buttons">
        <Link to="admin/articles" className="admin-button">
          Artículos
        </Link>
        <Link to="admin/videos" className="admin-button">
          Vídeos
        </Link>
      </div>
    </div>
  );
}

export default Home;
