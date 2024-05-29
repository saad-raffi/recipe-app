import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`http://localhost:3000/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.price}</p>
      <p>{recipe.description}</p>
      <span>{recipe.category}</span>
    </div>
  );
};

export default RecipeDetails;
