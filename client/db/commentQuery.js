var MongoClient = require('mongodb').MongoClient;

var CommentQuery = function () {
    this.url = "mongodb://localhost:27017/status_checker";
};

CommentQuery.prototype = {

    all: function (callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.find().toArray(function (err, result) {
                callback(result);
            });
        });
    },

    add: function (commentToAdd, onQueryFinished) {
        MongoClient.connect(this.url, function (err, db) {
            if (db) {
                var collection = db.collection('comments');
                collection.insert(commentToAdd);
                collection.find().toArray(function (err, docs) {
                    onQueryFinished(docs);
                });
            };
        });
    },

    findCommentByCommentId: function (id, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.findOne({
                _id: new ObjectId(id)
            }).toArray(function (err, result) {
                callback(result);
            });
        });
    },

    allCommentsByEventId: function (EventId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.find({}, {
                eventId: new Object(EventId)
            }).toArray(function (err, result) {
                callback(result);
            });
        });
    },

    deleteCommentByCommentId: function (commentId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.deleteOne({
                _id: new ObjectId(commentId)
            }, function (err, result) {
                callback(result);
            });
        });
    },

    deleteCommentsByEventId: function (eventId, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.deleteMany({
                eventId: new ObjectId(eventId)
            }, function (err, result) {
                callback(result);
            });
        });
    },

    updateCommentByCommentId: function (commentId, eventIdToEdit, commentDateToEdit, textToEdit, callback) {
        MongoClient.connect(this.url, function (err, db) {
            var collection = db.collection('comments');
            collection.upateOne({
                    _Id: new Object(eventId)
                }, {
                    $set: {
                        "eventId": eventNameToEdit,
                        "commentDateToEdit": commentDateToEdit,
                        "commentText": textToEdit
                    }
                },
                function (err, result) {
                    callback(result);
                });
        });
    },










};


module.exports = CommentQuery;