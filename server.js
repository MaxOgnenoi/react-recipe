require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

const YOUR_EDAMAM_APP_ID = process.env.YOUR_EDAMAM_APP_ID;
const YOUR_EDAMAM_APP_KEY = process.env.YOUR_EDAMAM_APP_KEY;

app.get('/api/recipes', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${YOUR_EDAMAM_APP_ID}&app_key=${YOUR_EDAMAM_APP_KEY}`
    );
    res.json(response.data.hits);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
