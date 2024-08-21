// create a small HTTP server using Express module

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.all('*', (req, res) => {
  res.status(404).send(`Cannot GET /lskdlskd`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
