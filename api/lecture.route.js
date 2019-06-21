const nodemailer = require('nodemailer');

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
            lecture.typeOfEmp = req.body.typeOfEmp;
            lecture.lecturedetails = req.body.lecturedetails;
            lecture.faculty = req.body.faculty;
            lecture.passwrd = req.body.passwrd;
            lecture.email = req.body.email;

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


var smtpTransport = nodemailer.createTransport({

    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:'fernandopumudu@gmail.com',
        pass:'0112616997'
    },
    tls:{rejectUnauthorized:false},
    debug:true
});

lectureRoutes.route('/send').post(function(req,res) {
    console.log("start");


    var mailOptions = {
        to: req.body.email,
        subject: "Account Created ",
        text: "Your Account was Created Sucessfully for Id :"+req.body.lecId

    }


//check whether mail is working
    console.log(mailOptions);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error+"not working");

        } else {
            console.log("Message sent Succesfully : " + response.message);

        }
    });

});


module.exports = lectureRoutes;