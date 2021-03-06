var Status = require('/models/status');

var Statuses = function(){

};

Statuses.prototype.makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
};

Statuses.prototype.makePostRequest = function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(payload);
};

Statuses.prototype.add = function(newStatus, callback){
    var statusToAdd = JSON.stringify(newStatus);
    console.log("New Status", statusToAdd);
    this.makePostRequest("http://localhost:3000/api/statuses", callback, statusToAdd);
};


module.exports = Statuses;