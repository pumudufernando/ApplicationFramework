const express = require('express');
const courseRoutes = express.Router();

// Require Business model in our routes module
let Courses = require('./create.model');

// Defined store route
courseRoutes.route('/add').post(function (req, res) {
    let course = new Courses(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'course': 'course is added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
courseRoutes.route('/').get(function (req, res) {
    Courses.find(function(err, businesses){
        if(err){
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});

// Defined edit route
courseRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Courses.findById(id, function (err, course){
        res.json(course);
    });
});

//  Defined update route
courseRoutes.route('/update/:id').post(function (req, res) {
    Courses.findById(req.params.id, function(err, course) {
        if (!course)
            res.status(404).send("data is not found");
        else {
            course.courseno = req.body.courseno;
            course.coursename = req.body.coursename;
            course.credits = req.body.credits;
            course.coursedetails = req.body.coursedetails;
            course.instructor = req.body.instructor;

            course.save().then(course => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
courseRoutes.route('/delete/:id').get(function (req, res) {
    Courses.findByIdAndRemove({_id: req.params.id}, function(err, course){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = courseRoutes;