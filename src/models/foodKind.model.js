'use strict';
var dbConn = require('./../../config/db.config');

var FoodKind = function (foodKind) {
    this.kind = foodKind.kind;
};
FoodKind.create = function (newData, result) {
    dbConn.query("INSERT INTO kind set ?", newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FoodKind.readAll = function (result) {
    dbConn.query("SELECT * FROM kind", function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = FoodKind;