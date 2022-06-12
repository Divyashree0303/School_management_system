const Student = require('../models/student');
const {StudentSubject} = require('../models/student_subject');
const Scorecard = require('../models/scorecard');
const getPercentage = require('./getPercentage');

const makeScorecard = (req,res) => {
    let studentId = req.params.studentId;
    let comments = req.query.comments;
    var today = new Date(); 
    var date = today.getDate();
    let studentName;
    

    Student.findOne({_id : studentId})
    .then( docs => {
        studentName = docs.name;
        StudentSubject.find({studentName : docs.name})
        .then( docs => {
            Scorecard.create({ subjects : docs , studentName : studentName , dateOfScorecard : date  , comments : comments})
            .then( scorecard => {
                getPercentage(studentId);
                res.status(201).json(scorecard);
            })
            .catch( err => console.log(err));
        })
        .catch( err => console.log(err));
    })
    .catch( err => console.log(err))
}

module.exports = makeScorecard;