const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content into lines
    const lines = data.trim().split('\n');

    // Remove the header line
    const header = lines.shift();

    // If there are no data lines left after removing the header
    if (lines.length === 0) {
      console.log('Number of students: 0');
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

  } catch (error) {
    // Handle errors (e.g., file not found)
    console.error('Cannot load the database');
    throw new Error('Cannot load the database');
  }
}

// Export the function to make it accessible from other files
module.exports = countStudents;
