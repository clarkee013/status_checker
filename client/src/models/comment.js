var Comment = function(options){
        this.id = options._id;
        this.eventId = options.eventId;
        this.commentDate = options.commentDate;
        this.commentText = options.commentText;
        
    }
    
    module.exports = Comment; 