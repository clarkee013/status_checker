var Event = function(options){
    this.id = options.id;
    this.statusID = options.statusID
    this.content = options.content;
    this.activeDate = options.activeDate;
    this.lastUpdated = options.lastUpdated;
    this.resolveDate = options.resolveDate;
    
}

module.exports = Event;