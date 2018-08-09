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
      // removeDocument(db, function(result){
      //   findDocuments(db, function(result) {
      //       res.json(result);
      //         db.close();
      //     });
      // }); 
      // insertDocuments(db, function(result){ 
      //   createCollatedIndex(db, function(result) {
      //     findDocuments(db, function(result) {
      //       res.json(result);
      //         db.close();
      //     });
      //   }); 
      // });
      // createCollatedIndex(db, function(result) {
      //     findDocuments(db, function(result) {
      //       res.json(result);
      //         db.close();
      //     });
      //   }); 
      findsortDocuments(db, function(result){
        res.json(result);
        db.close();
      })
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
    { 'unique' : 0 },
    { 'collation' : { 'locale' : 'en_US' } }, function(err, result) {
      console.log(result);
      callback(result);
  });
};

var findsortDocuments = function(db, callback) {
  var collection = db.collection( 'contacts' );
  collection.find({ 'name' : 'Atelia' }, { '_id' : 0 }, { 'collation' : {'locale' : 'en_US' } }).sort({ 'name': 1 }).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
  });
}




// CRUD FROM OLD FILE 
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('contacts');
  // Insert some documents
  collection.insertMany([
    {name : "Guru", }, {name : "Atelia"}, {name : "Hilar"}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('contacts');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


// Remove the document where the field a is equal to 3.
var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('contacts');
  // // Delete document where a is 3
  // collection.deleteOne({ name_1}, function(err, result) {
  //   assert.equal(err, null);
  //   assert.equal(1, result.result.n);
  //   console.log("Removed the document with the field a equal to 3");
  //   callback(result);
  // }); 
  collection.drop(function(err, docs){
    callback(docs);
  });
}

module.exports = router;