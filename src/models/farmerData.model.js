'use strict';
var dbConn = require('./../../config/db.config');

//Container object create
var FarmerData = function (farmerData) {
    this.feedTime = farmerData.feedTime;
    this.totalDucks = farmerData.totalDucks;
    this.quantity = farmerData.quantity;
    this.location_idlocation = farmerData.location;
    this.food_idfood = farmerData.food;
    this.kind_idkind = farmerData.kind;

};
FarmerData.create = function (newData, result) {
    dbConn.query("INSERT INTO farmer_data set ?", newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FarmerData.readAll = function (result) {
    dbConn.query("SELECT * FROM farmer_data", function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = FarmerData;