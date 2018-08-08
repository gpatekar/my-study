var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myapp';

router.get('/', function(req, res) {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    createCollated(db, function() {
        db.close();
    });
    });
});


var createCollated = function(db, callback) {
  // var collection = db.collection('documents');
  db.createCollection("contacts", 
    { 
      'collation' : 
        { 'locale': 'fr_CA' }
    },

    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
};


var createCollatedIndex = function(db, callback) {
  // Get the contacts collection
  var collection = db.collection('contacts');
  // Create the index
  collection.createIndex(
    { 'name' : 1 },
    { 'unique' : 1 },
    { 'collation' : { 'locale' : 'en_US' } }, function(err, result) {
      console.log(result);
      callback(result);
  });
};
module.exports = router;