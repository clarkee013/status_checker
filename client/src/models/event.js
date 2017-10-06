var Event = function(options){
        this.id = options._id;
        this.statusId = options.statusId;
        this.startDate = options.startDate;
        this.lastUpdated = options.lastUpdated;
        this.resolvedDate = options.resolvedDate;
        this.comment = options.comment || [];
        
    }
    
    module.exports = Event; 