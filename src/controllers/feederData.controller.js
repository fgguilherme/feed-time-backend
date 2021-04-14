const FeederDataModel = require('../models/feederData.model');

exports.create = function (req, res) {
    var fd = new FeederDataModel(req.body)
    if (Object.keys(req.body).length != Object.keys(fd).length ) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        FeederDataModel.create(fd, function (err, resData) {
            if (err)
                res.send(err);
            else
                res.json({ error: false, message: "Data added successfully!", data: resData });
        });
    }
};

exports.createMulti = function (req, res) {
    var fdArr = []
    const dateEnd = new Date(req.body.endDate)
    let tmpDate = new Date(req.body.startDate)
    while(tmpDate <= dateEnd){
        const fd = {
            feedTime: tmpDate.toISOString().slice(0, 10).replace('T', ' ')+" "+req.body.feedTime,
            totalDucks: parseInt(req.body.totalDucks, 10),
            quantity: req.body.quantity,
            location: req.body.location,
            food: req.body.food,
            kind: req.body.kind
        }
        fdArr.push(new FeederDataModel(fd))
        tmpDate.setDate(tmpDate.getDate() + 1)
    }
    FeederDataModel.createMulti(fdArr, function (err, resData) {
        if (err)
            res.send(err);
        else
            res.json({ error: false, message: "Data added successfully!", data: resData });
    });
};

exports.readAll = function (req, res) {
    FeederDataModel.readAll(function (err, resData) {
        if (err)
            res.send(err);
        res.json({ error: false, message: "OK", data: resData });
    });
};