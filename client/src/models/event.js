var Event = function(options){
        this.id = options.id;
        this.statusID = options.statusID
        this.startDate = options.startDate;
        this.lastUpdated = options.lastUpdated;
        this.resolveDate = options.resolveDate;
        this.comment = options.comment || [];
        
    }
    
    module.exports = Event; 