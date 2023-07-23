// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000; // Change this to any desired port number

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Configuration
const db = mysql.createConnection({
  host: 'localhost', // e.g., localhost
  user: 'root', // e.g., root
  password: '1234',
  database: 'user', // Create a database for this application
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// User registration endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { username, email, password };
  db.query('INSERT INTO user_table2 SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ message: 'Error registering user' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
