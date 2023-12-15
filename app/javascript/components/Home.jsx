import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Recettes de cuisine</h1>
        <p className="lead">
          Une collection de recettes de cuisine pour de meilleurs repas et des moments de partage.
        </p>
        <hr className="my-4" />
        <Link
        to="/recipes"
        className="btn btn-lg custom-button"
        role="button"
        style={{
          color: "white",
          border: "none",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
          Voir les recettes
        </Link>
      </div>
    </div>
  </div>
);
