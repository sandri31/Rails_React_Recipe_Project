import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  }, []);

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={`${recipe.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
            Voir la recette
          </Link>
        </div>
      </div>
    </div>
  ));
  const noRecipe = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        Pas de recette pour le moment. Pourquoi ne pas en <Link to="/recipe">créer une</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recettes pour tous les goûts</h1>
          <p className="lead text-muted">
          Nous avons rassemblé nos recettes les plus populaires, nos dernières
          ajouts et choix de notre éditeur, donc il y aura sûrement quelque chose
          c'est tentant pour vous d'essayer.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/recipe" className="btn custom-button">
              Créer une nouvelle recette
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link to="/" className="btn btn-link">
            Retour à la page d'accueil
          </Link>
        </main>
      </div>
    </>
  );
};

export default Recipes;