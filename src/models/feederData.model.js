'use strict';
var dbConn = require('./../../config/db.config');

//Container object create
var FeederData = function (feederData) {
    this.feedTime = feederData.feedTime;
    this.totalDucks = feederData.totalDucks;
    this.quantity = feederData.quantity;
    this.location_idlocation = feederData.location;
    this.food_idfood = feederData.food;
    this.kind_idkind = feederData.kind;

};
FeederData.create = function (newData, result) {
    dbConn.query("INSERT INTO farmer_data set ?", newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FeederData.createMulti = function (newData, result) {
    let query = "INSERT INTO farmer_data (feedTime, totalDucks, quantity, location_idlocation, food_idfood, kind_idkind) VALUES "
    newData.forEach(e => {
        query += "('"+e.feedTime+"',"+e.totalDucks+","+e.quantity+","+e.location_idlocation+","+e.food_idfood+","+e.kind_idkind+"), "
    });
    query = query.substring(0, query.length - 2)
    dbConn.query(query, newData, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
FeederData.readAll = function (result) {
    dbConn.query("SELECT feedTime, totalDucks, quantity, food.food AS food, kind.kind AS kind, location.location FROM `farmer_data` LEFT JOIN location on location.idlocation = location_idlocation LEFT JOIN food on food.idfood = food_idfood LEFT JOIN kind ON kind.idkind = kind_idkind", function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = FeederData;