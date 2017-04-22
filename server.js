const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');//include passport midddleware
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => { 
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());
 
// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User Routes
const controller = require('./controllers/controller');
app.use('/controllers', controller);



// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

//C:\MongoDB\Server\3.4\bin
