const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously using the traditional fs module with a callback
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // If an error occurs, reject the promise with an error message
        console.error('Cannot load the database');
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the file content into lines and remove the header
        const lines = data.trim().split('\n');
        const header = lines.shift();

        // If there are no data lines left after removing the header
        if (lines.length === 0) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        // Initialize a counter for total students and an object to store field data
        const studentCount = lines.length;
        const fieldCount = {};

        // Process each line
        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
            fieldCount[field].push(firstname);
          }
        });

        // Log the total number of students
        console.log(`Number of students: ${studentCount}`);

        // Log the number of students and list in each field
        for (const [field, students] of Object.entries(fieldCount)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      } catch (processingError) {
        // Catch any processing errors and reject the promise
        console.error('Error processing the file');
        reject(processingError);
      }
    });
  });
}

module.exports = countStudents;
