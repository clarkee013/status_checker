var Status = function(options){
    this.id = options._id;
    this.name = name;
    this.colour = colour;
    this.resolved = resolved;
    this.startDate = options.activeDate;
    this.lastUpdated = options.lastUpdated;
    this.endDate = options.resolveDate;
    this.event = options.event || [];


    
}

module.exports = Status;