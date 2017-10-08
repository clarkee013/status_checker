var Status = require('./models/status');
var Event = require('./models/event');
var Comment = require('.models/comment');



// Set up handlers for nav menu options
setNavHandlers();

// Set up handler for creating a status
var statusForm = document.querySelector("#status-form");
statusForm.onsubmit = createNewStatus;

var setNavHandlers = function () {
    var newStatusButton = document.querySelector("#new-status-button");
    newStatusButton.onclick = switchToContact;
    var homeButton = document.querySelector("#home-button");
    homeButton.onclick = switchToHome;
}

var switchToNewStatus = function () {
    var newStatus = document.querySelector("#newStatus-div")
    newStatus.style.display = "block";
    var main = document.querySelector("#main-div");
    main.style.display = "none";
}

var switchToHome = function () {
    var main = document.querySelector("#main-div")
    main.style.display = "block";
    var newStatus = document.querySelector("#newStatus-div")
    newStatus.style.display = "none";
}

var switchToResolvedEvents = function () {
    var main = document.querySelector("#main-div")
    main.style.display = "block";
    var resolvedEvents = document.querySelector("#resolved-events-div")
    resolvedEvents.style.display = "none";
}

var createNewStatus = function (e) {
    e.preventDefault();
    console.log(e);
    var newStatus = {
        name: e.target.children.name.value,
        colour: e.target.children.colour.value,
        resolved: e.target.children.resolved.value,
        startDate: e.target.children.startDate.value,
        lastUpdated: e.target.children.lastUpdated.value,
        resolvedDate: e.target.children.resolvedDate.value,
    }
    var statuses = new Statuses();
    statuses.add(newStatus, function (data) {
        console.log(data);
    });
}