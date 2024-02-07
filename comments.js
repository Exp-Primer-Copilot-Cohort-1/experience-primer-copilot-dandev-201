// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Store comments in an array
var comments = [];

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add a comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);