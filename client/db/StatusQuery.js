var MongoClient = require('mongodb').MongoClient;

var StatusQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

StatusQuery.prototype = {

    // Create One & return all 
    add: function (statusToAdd, callback) {
        MongoClient.connect(this.url, function (err, db) {
            if (db) {
                var collection = db.collection('statuses');
                collection.insert(statusToAdd);
                collection.find().toArray(function (err, results) {
                    callback(results);
                });
            };
        });
    },

    // Read all & return all
    all: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.find().toArray(function (err, result) {
                callback(result);
            });
        });
    },

    // Read by Id and return result
    findById: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.findOne({
                "_id": new ObjectId(id)
            }, function (err, result) {
                callback(result);
            });
        });
    },

    // Read all with resolved as False & return all results
    findUnresolved: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.find({
                "resolved": false
            }).toArray(function (err, results) {
                callback(results);
            });
        });
    },

    // Delete Status by ID & return amended status results
    delete: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.deleteOne({
                "_id": new Object(id)
            });
            collection.find().toArray(function (err, results) {
                callback(results);
            });
        });
    },




}; // end of prototype


module.exports = StatusQuery