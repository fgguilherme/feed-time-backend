'use strict';
var dbConn = require('./../../config/db.config');

var FeedLocation = function (feedLocation) {
    this.location = feedLocation.location;
};
FeedLocation.create = function (newData, result) {
    dbConn.query("INSERT INTO location set ?", newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FeedLocation.readAll = function (result) {
    dbConn.query("SELECT * FROM location", function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = FeedLocation;