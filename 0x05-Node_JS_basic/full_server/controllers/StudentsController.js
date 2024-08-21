// StudentsController class
const readDatabase = require('../utils')

class StudentsController {
  getAllStudents(req, res) {
    res.statusCode = 200;
    const dbPath = process.argv[2];

    res.write('This is the list of our students\n');

    readDatabase(dbPath)
    .then((data) => {
       // Sort the entries by field name in a case-insensitive alphabetical order
      const sortedEntries = Object.entries(data).sort(([fieldA], [fieldB]) => 
      fieldA.localeCompare(fieldB, undefined, { sensitivity: 'base' })
     );
      for (const [field, students] of sortedEntries) {
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        res.end()
      };
    })
    .catch((error) => {
      res.statusCode = 500;  // Internal Server Error status code
      res.end('Cannot load the database');
    });
  };

  getAllStudentsByMajor (req, res) {
    const major = req.get('major')
    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE')
    }

    res.statusCode = 200;
    const dbPath = process.argv[2];

    readDatabase(dbPath)
    .then((data) => {
      for (const [field, students] of sortedEntries) {
        if (field === major) {
          res.write(`List: ${students.join(', ')}\n`);
          res.end()
        };
      };
    })
    .catch((error) => {
      res.statusCode = 500;  // Internal Server Error status code
      res.end('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
