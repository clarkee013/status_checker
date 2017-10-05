var MongoClient = require('mongodb').MongoClient;

var CommentQuery = function(){
  this.url = "mongodb://localhost:27017/status_checker";
};

EventQuery.prototype = {
      all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('events');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },
    add: function(commentToAdd, onQueryFinished){
        MongoClient.connect(this.url, function(err, db){
            if(db){
                var collection = db.collection('events');
                collection.insert(commentToAdd);
                collection.find().toArray(function(err, docs){
                    onQueryFinished(docs);
                });
            };
        });
    },
    findById: function(id, callback){
        MongoClient.connect(this.url, function(err, db){
         var collection = db.collection('events');
         collection.findOne({"_id": new ObjectId(id)}, function(err, result) {
          callback(result);
              });
       });
     },     
     
     
   };

module.exports = EventQuery;