// simple express server
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

// Route to handle /cart/:id with validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id; // Extract the ID from the route parameters
  res.status(200).end(`Payment methods for cart ${id}`);
});

// Error handling for invalid ID
app.get('/cart/:id', (req, res) => {
  res.status(404).end('Item not found');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
