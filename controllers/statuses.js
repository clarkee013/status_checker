var express = require('express');
var app = express();
var statusRouter = express.Router();


var Status = require('../client/src/models/status')

var StatusQuery = require('../client/db/statusQuery');
var statusQuery = new StatusQuery();



statusRouter.post('/', function(req, res){
    console.log(req.body)
    var status = new Status({
        name: req.body.name,
        colour: req.body.colour,
        resolved: req.body.resolved,
        startDate: req.body.startDate,
        resolvedDate: req.body.resolvedDate
    });
    statusQuery.add(status, function(){
        res.redirect('/')
    })
    // console.log(newStatus);
});




module.exports = statusRouter;