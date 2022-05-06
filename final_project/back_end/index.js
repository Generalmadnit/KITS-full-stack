const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kits_username:kits_password@cluster0.9nck6.mongodb.net/sms_db?retryWrites=true&w=majority");

// To connect to locally stored DBMS.
// mongoose.console("mongodb://localhost/sms_db");

const db_instance = mongoose.connection;

db_instance.on('error', () => { console.log("DB Connection failed"); });
db_instance.on('open', () => { console.log("DB Connection Successful"); });

const app  = express();
const port = 8080; //443 if we want to use https

app.use(cors({
  'origin': "http://localhost:3000"
}))

app.listen(port, () => {
  console.log("Server started...");
});

app.get("/status", (req, res) => {
  res.json({
    'status': "Active"
  });
});

app.get('/students', (req, res) => {
  //TODO: Send list of all students.
});

app.get('/single_student', (req, res) => {
  const student_id = req.query.id;
  //TODO: Send the information (Detailed) of a single student.
});

app.post('/single_student', (req, res) => {
  const student_id = req.query.id;
  //TODO: Update the Databse.
});

app.post('/admission', (req, res) => {
  //TODO: Add the new data to the Database.
});