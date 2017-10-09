var MongoClient = require('mongodb').MongoClient;

var CommentQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

CommentQuery.prototype = {

        // Create One & return all 
        add: function (commentToAdd, callback) {
            MongoClient.connect(this.url, function (err, db) {
                if (db) {
                    var collection = db.collection('comments');
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
                var collection = db.collection('comments');
                collection.find().toArray(function (err, result) {
                    callback(result);
                });
            });
        },
    
        // Read by Id and return result
        findById: function (id, callback) {
            MongoClient.connect(this.url, function (err, db) {
                var collection = db.collection('comments');
                collection.findOne({
                    "_id": new ObjectId(id)
                }, function (err, result) {
                    callback(result);
                });
            });
        },
    
        // Read by Event ID and return results
        allByEventID: function (eventId, callback) {
            MongoClient.connect(this.url, function (err, db) {
                var collection = db.collection('comments');
                collection.find({}, {
                    "eventId": new Object(eventId)
                }).toArray(function (err, result) {
                    callback(result);
                });
            });
        },

    // Update Event by Comment ID - work needed on this method (placeholder)
    // updateCommentByCommentId: function (commentId, eventIdToEdit, commentDateToEdit, textToEdit, callback) {
    //     MongoClient.connect(this.url, function (err, db) {
    //         var collection = db.collection('comments');
    //         collection.upateOne({
    //                 _Id: new Object(eventId)
    //             }, {
    //                 $set: {
    //                     "eventId": eventNameToEdit,
    //                     "commentDateToEdit": commentDateToEdit,
    //                     "commentText": textToEdit
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
            var collection = db.collection('comments');
            collection.deleteOne({
                "_id": new Object(id)
            });
            collection.find().toArray(function (err, results) {
                callback(results);
            });
        });
    },

    // Delete all Comments by Event ID & return amended Comments results
    deleteAllByEventId: function (eventId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.deleteMany({
                "eventId": new ObjectId(eventId)
            });
            collection.find().toArray(function (err, results) {
                callback(results);
            });
        });
    },










}; // end of prototype


module.exports = CommentQuery;