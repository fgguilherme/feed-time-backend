const LocationModel = require('../models/location.model');

exports.create = function (req, res) {
    var fd = new LocationModel(req.body)
    if (Object.keys(req.body).length != Object.keys(fd).length ) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        LocationModel.create(fd, function (err, resData) {
            if (err)
                res.send(err);
            else
                res.json({ error: false, message: "Data added successfully!", data: resData });
        });
    }
};

exports.readAll = function (req, res) {
    LocationModel.readAll(function (err, resData) {
        if (err)
            res.send(err);
        res.json({ error: false, message: "OK", data: resData });
    });
};