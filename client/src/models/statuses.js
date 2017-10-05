var Status = require('/status');

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
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('load', callback);
    request.send(payload);
};


module.exports = Statuses;