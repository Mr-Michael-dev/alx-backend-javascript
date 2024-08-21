//  create a small HTTP server using the http module

const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http.createServer(async (req, res) => {
  const path = req.url;
  res.setHeader('Content-Type', 'text/plain');

  if (path === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
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
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
