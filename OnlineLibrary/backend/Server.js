const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Port where the server will run

// Middleware to handle CORS
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root route - Ensure this is defined
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Example API endpoint
app.get('/api/endpoint', (req, res) => {
  const responseData = {
    message: 'Hello from the backend!',
    status: 'success',
    data: {
      example: 'This is some data returned by the server.'
    }
  };
  res.json(responseData); // Send JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
