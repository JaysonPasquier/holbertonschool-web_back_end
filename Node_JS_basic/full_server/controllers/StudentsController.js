import readDatabase from '../utils';

/**
 * Controller for student-related routes.
 */
class StudentsController {
  /**
   * Gets all students grouped by field.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static getAllStudents(req, res) {
    const databasePath = process.argv[2] || 'database.csv';

    readDatabase(databasePath)
      .then((studentsByField) => {
        const responseLines = ['This is the list of our students'];

        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        sortedFields.forEach((field) => {
          const students = studentsByField[field];
          const studentList = students.join(', ');
          responseLines.push(`Number of students in ${field}: ${students.length}. List: ${studentList}`);
        });

        res.status(200).send(responseLines.join('\n'));
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  /**
   * Gets students by major.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2] || 'database.csv';

    // Validate major parameter
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;
