const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise<void>} A promise that resolves when all students are counted.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
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

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
