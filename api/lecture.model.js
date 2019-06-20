const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Lecture = new Schema({
    lecId: {
        type: String
    },

    lecName: {
        type: String
    },

    designation: {
        type: String
    },

    lecturedetails: {
        type: String
    },

    faculty: {
        type: String
    }


},{
    collection : 'lecture'

});

module.exports = mongoose.model('Lecture',Lecture);