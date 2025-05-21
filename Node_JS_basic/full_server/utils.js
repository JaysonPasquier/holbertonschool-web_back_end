import fs from 'fs';

/**
 * Reads the database file asynchronously and processes the student data.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<Object>} - Promise resolving to an object with student data by field.
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const content = data.toString().split('\n');
    const filteredContent = content.filter((line) => line.trim() !== '');
    const students = filteredContent.slice(1); // Skip the header line

    const studentsByField = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    resolve(studentsByField);
  });
});

export default readDatabase;
