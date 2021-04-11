'use strict';
var dbConn = require('./../../config/db.config');
//User object create
var User = function (user) {
    this.name = user.name;
    this.mail = user.mail;
    this.username = user.username;
    this.password = user.password;
};
User.create = function (newEmp, result) {
    dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
User.findByUsername = function (un, result) {
    dbConn.query("Select * from users where username = ? ", un, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.findByMail = function (mail, result) {
    dbConn.query("Select * from users where mail = ? ", mail, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.findById = function (id, result) {
    dbConn.query("Select * from users where idusers = ? ", id, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.readAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
User.update = function (id, user, result) {
    dbConn.query("UPDATE users SET "+
                 "name=?,mail=?,username=?,password=? "+
                 "WHERE idusers = ?", [
                        user.name, 
                        user.mail, 
                        user.username, 
                        user.password,  
                        id
                    ]
                        , function (err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = User;