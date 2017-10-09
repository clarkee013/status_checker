var MongoClient = require('mongodb').MongoClient;

var EventQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

EventQuery.prototype = {


    // Create One & return all 
    add: function (eventToAdd, callback) {
        MongoClient.connect(this.url, function (err, db) {
            if (db) {
                var collection = db.collection('events');
                collection.insert(eventToAdd);
                collection.find().toArray(function (err, results) {
                    callback(results);
                });
            };
        });
    },

    // Read all & return all
    all: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.find().toArray(function (err, result) {
                callback(result);
            });
        });
    },

    // Read by Id and return result
    findById: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.findOne({
                "_id": new ObjectId(id)
            }, function (err, result) {
                callback(result);
            });
        });
    },

    // Read by Status ID and return all results
    allByStatusID: function (statusId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.find({}, {
                statusId: new Object(statusId)
            }).toArray(function (err, result) {
                callback(result);
            });
        });
    },

    // Update Event by Event ID - work needed on this method (placeholder)
    // editEventByEventId: function (eventId, StatusNameToEdit, startDateToEdit, lastUpdateDateToEdit, resolvedDateToEdit, callback) {
    //     MongoClient.connect(this.url, function (err, db) {
    //         var collection = db.collection('events');
    //         collection.upateOne({
    //                 eventId: new Object(eventId)
    //             }, {
    //                 $set: {
    //                     "statusId": StatusNameToEdit,
    //                     "startDate": startDateToEdit,
    //                     "lastUpdated": lastUpdateDateToEdit,
    //                     "resolvedDate": resolvedDateToEdit
    //                 }
    //             },
    //             function (err, result) {
    //                 callback(result);
    //             });
    //     });
    // },

    // Delete Event by ID & return amended results
    delete: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.deleteOne({
                "_id": new Object(id)
            });
            collection.find().toArray(function (err, results) {
                callback(results);
            });
        });
    },

    // Delete all Events by Status ID & return amended events results
    deleteAllByStatusId: function (statusId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('events');
            collection.deleteMany({
                "statusId": new ObjectId(statusId)
            });
            collection.find().toArray(function (err, results) {
                callback(results);
            });
        });
    },





}; // end of prototype

module.exports = EventQuery;