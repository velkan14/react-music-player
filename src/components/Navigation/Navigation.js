import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="Navigation">
      {location.pathname !== "/" && (
        <Link className="back" to="/" disabled>
          ←
        </Link>
      )}
      <h1>Music Player ♫</h1>
    </nav>
  );
};

export { Navigation };
