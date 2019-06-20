const express = require('express');
const approveRoutes = express.Router();

// Require Business model in our routes module
let Approve = require('./approve.model');


// Defined store route
approveRoutes.route('/add').post(function (req, res) {
    let course = new Approve(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'course': 'course is added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Defined get data(index or listing) route
approveRoutes.route('/:instructor').get(function (req, res) {
    Approve.find({instructor:req.params.instructor},function(err, course){
        if(err){
            console.log(err);
        }
        else {
            res.json(course);
        }
    });
});


approveRoutes.route('/').get(function (req, res) {
    Approve.find(function(err, course){
        if(err){
            console.log(err);
        }
        else {
            res.json(course);
        }
    });
});



// Defined edit route
approveRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Approve.findById(id, function (err, course){
        res.json(course);
    });
});

//  Defined update route
approveRoutes.route('/update/:id').post(function (req, res) {
    Approve.findById(req.params.id, function(err, course) {
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
approveRoutes.route('/delete/:id').get(function (req, res) {
    Approve.findByIdAndRemove({_id: req.params.id}, function(err, course){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = approveRoutes;