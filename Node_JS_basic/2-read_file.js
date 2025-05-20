const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const studentLines = lines.slice(1);
    console.log(`Number of students: ${studentLines.length}`);
    const studentsByField = {};
    studentLines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });
    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
