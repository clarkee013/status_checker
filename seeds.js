use comments;

db.comments.insert([
    {
        eventId: 1,
        commentDate: "01/10/2017",
        commentText: "Test text for 1st comment - event 001"
    },
    {
        eventId: 001,
        commentDate: "02/10/2017",
        commentText: "Test text for 2nd comment - event 001"
    },
    {
        eventId: 002,
        commentDate: "03/10/2017",
        commentText: "Test text for 1st comment - event 002"
    },
    {
        eventId: 003,
        commentDate: "04/10/2017",
        commentText: "Test text for 1st comment - event 003"
    },

])

use events;

db.events.insert({
    {
        statusId: 1
    }
})



var Event = function(options){
    this.id = options._id;
    this.statusId = options.statusId;
    this.startDate = options.startDate;
    this.lastUpdated = options.lastUpdated;
    this.resolvedDate = options.resolvedDate;
    this.comment = options.comment || [];
    
}

// Seeds needs split into different collections to seed the correct collections 
// as the above structure has changed to maintain Single Responsibility

