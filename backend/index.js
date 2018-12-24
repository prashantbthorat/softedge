// Created seprate folder for backend process. 
// then npm init (for installing package.json).
// npm install express
// npm install body-parser
// npm install cors

// to create new file >> type NUL>index.js

// to run the file  >> node index.js


var express = require('express');
var cors = require('cors');
var app = express();

var users = [{
    'id': 1,
    'name': 'Nilesh',
    'add': 'Baner' 
}]

app.use(cors())
 
app.get('/user', function (req, res, next) {
  res.json(
      users
  )
})
 
app.listen(5050, function () {
  console.log('CORS-enabled web server listening on port 80')
})