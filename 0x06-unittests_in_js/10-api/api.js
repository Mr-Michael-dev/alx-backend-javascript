// simple express server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle the root path
app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

// Route to handle /cart/:id with validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params; // Extract the ID from the route parameters
  res.status(200).end(`Payment methods for cart ${id}`);
});

// Error handling for invalid ID
app.get('/cart/:id', (req, res) => {
  res.status(404).end('Item not found');
});

// Endpoint to return available payment methods
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200).json(paymentMethods);
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { userName } = req.body; // Extract userName from request body
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Bad Request');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
