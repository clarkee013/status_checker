var MongoClient = require('mongodb').MongoClient;

var StatusQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

StatusQuery.prototype = {
    all: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.find().toArray(function (err, result) {
                callback(result);
            });
        });
    },

    add: function (statusToAdd, onQueryFinished) {
        MongoClient.connect(this.url, function (err, db) {
            if (db) {
                var collection = db.collection('statuses');
                collection.insert(statusToAdd);
                collection.find().toArray(function (err, docs) {
                    onQueryFinished(docs);
                });
            };
        });
    },

    findStatusById: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('statuses');
            collection.findOne({
                "_id": new ObjectId(id)
            }, function (err, result) {
                callback(result);
            });
        });
    },

// further CRUD actions needed...




};


module.exports = StatusQuery