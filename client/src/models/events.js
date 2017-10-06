var Event = require('/event');

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


module.exports = Events;