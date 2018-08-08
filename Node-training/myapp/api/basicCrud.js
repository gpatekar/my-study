var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
  var url = 'mongodb://localhost:27017/myapp';

/* GET users listing. */
router.get('/', function(req, res) {
  // res.json(feedbackData);
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

     insertDocuments(db, function(result) {
        // res.json(result);
        // db.close();
      });
      findDocuments(db, function(result) {
        res.json(result);
        db.close();
      });
  });
});

// insert data
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// find all data
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

// Find Documents with a Query Filter
var findQueryDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}

// Update a document
var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 1 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    // assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

// Remove the document where the field a is equal to 3.
var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}


// indexing
var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', function(req, res) {
  // feedbackData.unshift(req.body); // to shift the json data to bottom in the array 

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
  });

});


module.exports = router;