'use strict';
var dbConn = require('./../../config/db.config');

var FoodName = function (foodName) {
    this.food = foodName.food;
};
FoodName.create = function (newData, result) {
    dbConn.query("INSERT INTO food set ?", newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FoodName.readAll = function (result) {
    dbConn.query("SELECT * FROM food", function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = FoodName;