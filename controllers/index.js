// Primary routing file

//Bring in express to provide access to the express.Router method
var express = require('express');
// Create a new express Router
var router = new express.Router();
// Bring in path to provide functions for joining path names together
var path = require('path');

// Example of specifying a .js file that contains a specific block of routing code
// Effectively: When the browser hits [root address]/api/example everything should 
// be handled by [root address]/controllers/example.js
//
// router.use('/api/example', require('./example.js'));


// router.use('/api/comments', require('./comments'));
// router.use('/api/events', require('./events'));
router.use('/api/stauses', require('./statuses'));

// Function which returns index.html when the home page is visited
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/html/index.html'));
});

router.get('/newStatus', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/html/newStatus.html'));
});

// placeholder for more routers - file path my need revised //
// router.get('/EXAMPLE', function (req, res) {
//   res.sendFile(path.join(__dirname + '/../client/build/html/EXAMPLE.html'));
// });



module.exports = router;