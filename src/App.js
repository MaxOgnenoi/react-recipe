import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';
import './App.css'; // Import the CSS file

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get('/api/recipes'); // Fetch data from backend
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
