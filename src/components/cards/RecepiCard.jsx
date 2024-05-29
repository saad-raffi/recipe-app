import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecepiCard.css';

const RecepiCard = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card w-90 bg-base-100 shadow-xl">
    <figure> <img src={recipe.image} alt={recipe.name} className="card-img w-full h-48 object-cover" /></figure>
    <div className="card-body">
    <h2 className="card-title justify-center">{recipe.title}</h2>
          <h3 className=" card-title justify-center"> {recipe.price}</h3>
          <p>
            {isExpanded ? recipe.description : `${recipe.description.slice(0, 30)}...`}
          </p>
          <span >{recipe.category}</span>
          
      <div className="card-actions justify-center">
        <button onClick={handleToggle} className="details-button mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            {isExpanded ? 'Show Less' : 'Details'}
          </button>
      </div>
    </div>
  </div>
  );
};

export default RecepiCard;
