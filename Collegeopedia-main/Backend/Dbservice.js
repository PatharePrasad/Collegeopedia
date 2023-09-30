const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "collegeopedia"
});


const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory database (for demonstration purposes)
const database = [];

// Endpoint to add data to the database
app.post('/addData', (req, res) => {
  const { clgName, email, reference } = req.body;
  const newData = { clgName, email, reference };
  database.push(newData);
  res.json({ success: true, data: newData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});