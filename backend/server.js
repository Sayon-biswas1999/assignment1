const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user',
});

// Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
    } else {
      console.log('Connected to MySQL database!');
    }
});
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  

// Endpoint to handle registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Please provide both username and password.' });
    }
  
    // Save the registration data to the database
    pool.query('INSERT INTO user_table2 (username, email ,password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
      if (err) {
        console.error('Error saving registration data:', err.message);
        return res.status(500).json({ error: 'Error saving registration data.' });
      }
  
      console.log('Registration successful!');
      return res.status(201).json({ message: 'Registration successful!' });
    });
});
  


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});