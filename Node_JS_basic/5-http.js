const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const messages = [];
      let message;
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const nStudents = students.length ? students.length - 1 : 0;
      message = `Number of students: ${nStudents}`;
      messages.push(message);

      const subjects = {};
      for (const i in students) {
        if (i !== 0) {
          if (!subjects[students[i][3]]) subjects[students[i][3]] = [];
          subjects[students[i][3]].push(students[i][0]);
        }
      }
      delete subjects.field;

      for (const key of Object.keys(subjects)) {
        if (key && key !== 'undefined') {
          message = `Number of students in ${key}: ${
            subjects[key].length
          }. List: ${subjects[key].join(', ')}`;
          messages.push(message);
        }
      }
      resolve(messages);
    });
  });
}

const dbPath = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(dbPath)
      .then((messages) => {
        res.end(messages.join('\n'));
      })
      .catch((error) => {
        res.end(`${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
