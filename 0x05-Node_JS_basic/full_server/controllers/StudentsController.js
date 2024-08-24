// StudentsController class
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((data) => {
        res.write('This is the list of our students\n');
        // Sort the entries by field name in a case-insensitive alphabetical order
        const sortedEntries = Object.entries(data).sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB, undefined, { sensitivity: 'base' }));
        for (const [field, students] of sortedEntries) {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        }
        res.statusCode = 200;
        res.end();
      })
      .catch(() => {
        res.statusCode = 500; // Internal Server Error status code
        res.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE');
    }
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((data) => {
        for (const [field, students] of Object.entries(data)) {
          if (field === major) {
            res.write(`List: ${students.join(', ')}\n`);
            res.statusCode = 200;
            res.end();
          }
        }
      })
      .catch((error) => {
        console.log(error);
        res.statusCode = 500; // Internal Server Error status code
        res.end('Cannot load the database');
      });
  }
}
