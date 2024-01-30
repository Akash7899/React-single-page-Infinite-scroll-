// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch'); // If not already installed, run: npm install node-fetch

// const app = express();
// const port = 3001; // Choose a port for your backend server

// app.use(cors());

// app.get('/api/data', async (req, res) => {
//   try {
//     const apiUrl = 'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1'; // Replace with your API URL
//     const apiResponse = await fetch(apiUrl);
//     const data = await apiResponse.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
