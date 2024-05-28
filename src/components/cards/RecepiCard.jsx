import React from 'react';
import { Link } from 'react-router-dom';
import './RecepiCard.css';

const RecepiCard = ({ recipe }) => {
  return (
    <div className="card bg-violet-400">
      <img src={recipe.image} alt={recipe.name} className="card-img" />
      <div className="card-body">
        <h2 className="recipe-name">{recipe.title}</h2>
        <p className="recipe-price">Price: {recipe.price}</p>
        <p className="recipe-details">{recipe.description}</p>
        <span className="recipe-cuisine">{recipe.category}</span>
        {/* Use Link component for navigation */}
        <Link to={`/recipe/${recipe.id}`} className="details-button">Details</Link>
      </div>
    </div>
  );
};

export default RecepiCard;
