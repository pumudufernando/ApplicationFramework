const express = require('express');
const lectureRoutes = express.Router();

// Require Business model in our routes module
let Lecture = require('./lecture.model');


// Defined store route
lectureRoutes.route('/add').post(function (req, res) {
    let lecture = new Lecture(req.body);
    lecture.save()
        .then(lecture => {
            res.status(200).json({'lecture': 'lecture is added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Defined get data(index or listing) route
lectureRoutes.route('/').get(function (req, res) {
    Lecture.find(function(err, lecture){
        if(err){
            console.log(err);
        }
        else {
            res.json(lecture);
        }
    });
});

// Defined edit route
lectureRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Lecture.findById(id, function (err, lecture){
        res.json(lecture);
    });
});

//  Defined update route
lectureRoutes.route('/update/:id').post(function (req, res) {
    Lecture.findById(req.params.id, function(err, lecture) {
        if (!lecture)
            res.status(404).send("data is not found");
        else {
            lecture.lecId = req.body.lecId;
            lecture.lecName = req.body.lecName;
            lecture.designation = req.body.designation;
            lecture.lecturedetails = req.body.lecturedetails;
            lecture.faculty = req.body.faculty;

            lecture.save().then(lecture => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
lectureRoutes.route('/delete/:id').get(function (req, res) {
    Lecture.findByIdAndRemove({_id: req.params.id}, function(err, lecture){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = lectureRoutes;