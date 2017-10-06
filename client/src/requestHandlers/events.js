var Event = require('/models/status');

var Events = function(){

};

Events.prototype.makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
};

Events.prototype.makePostRequest = function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('load', callback);
    request.send(payload);
};

Events.prototype.add = function(newEvent, callback){
    var eventToAdd = JSON.stringify(newEvent);
    console.log("New Event", eventToAdd);
    this.makePostRequest("http://localhost:3000/api/events", callback, eventToAdd);
};


module.exports = Events; 