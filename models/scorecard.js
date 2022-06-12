const mongoose = require('mongoose');
const {studentSubjectSchema} = require('./student_subject');

const scorecardSchema = mongoose.Schema({
    dateOfScorecard : {
        type : Date
    },
    studentName : String ,
    subjects : [studentSubjectSchema],
    percentage : Number,
    rank : Number,
    comments : String
})

const Scorecard = new mongoose.model('Scorecard',scorecardSchema)
module.exports = Scorecard;