// create a small HTTP server using Express module

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const db = process.argv[2];

  try {
    let studentData = '';

    console.log = (message) => { studentData += `${message}\n`; };

    await countStudents(db);
    res.statusCode = 200;
    res.end(`This is the list of our students\n${studentData.trim()}`);
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
