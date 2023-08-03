import React from 'react';

const Recipe = ({ recipe }) => {
  const { label, image, ingredients } = recipe;

  return (
    <div className="recipe-card">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
