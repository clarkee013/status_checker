var MongoClient = require('mongodb').MongoClient;

var EventQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

EventQuery.prototype = {

    all: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.find().toArray(function (err, result) {
                callback(result);
            });
        });
    },

    add: function (commentToAdd, onQueryFinished) {
        MongoClient.connect(this.url, function (err, db) {
            if (db) {
                var collection = db.collection('events');
                collection.insert(commentToAdd);
                collection.find().toArray(function (err, docs) {
                    onQueryFinished(docs);
                });
            };
        });
    },

    findEventByEventId: function (eventId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.findOne({
                _id: new ObjectId(eventId)
            }).toArray(function (err, result) {
                callback(result);
            });
        });
    },

    allEventsByStatusId: function (statusId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.find({}, {
                statusId: new Object(statusId)
            }).toArray(function (err, result) {
                callback(result);
            });
        });
    },

    deleteEventByEventId: function (eventId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.deleteOne({
                _id: new ObjectId(eventId)
            }, function (err, result) {
                callback(result);
            });
        });
    },
    // not sure if callback function is needed yet, res 200 OK should be here or controller?

    deleteEventsByStatusId: function (statusId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.deleteMany({
                statusId: new ObjectId(statusId)
            }, function (err, result) {
                callback(result);
            });
        });
    },

    updateEventByEventId: function (eventId, StatusNameToEdit, startDateToEdit, lastUpdateDateToEdit, resolvedDateToEdit, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.upateOne({
                    eventId: new Object(eventId)
                }, {
                    $set: {
                        "statusId": StatusNameToEdit,
                        "startDate": startDateToEdit,
                        "lastUpdated": lastUpdateDateToEdit,
                        "resolvedDate": resolvedDateToEdit
                    }
                },
                function (err, result) {
                    callback(result);
                });
        });
    },
    // not sure if callback function is needed here either - 
    // onQueryFinished? Another res 200 OK message/controller?
    // edit comments[] from here as well?


};

module.exports = EventQuery;