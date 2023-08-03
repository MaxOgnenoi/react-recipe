import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container">
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
