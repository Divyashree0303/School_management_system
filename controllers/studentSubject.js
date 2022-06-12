const Student = require('../models/student');
const {StudentSubject} = require('../models/student_subject');

const addStudentSubject = (req,res) => {
    let studentId = req.params.studentId;
    let subjectName = req.query.subjectName;
    let dateOfExam = req.query.dateOfExam;
    let score = req.query.score

    Student.findOne({_id : studentId})
    .then((docs) => {
        StudentSubject.create({studentName : docs.name , subjectName : subjectName , dateOfExam : dateOfExam , score : score})
        .then( docs => {
            res.status(201).json({docs , message : 'subject added for student'})
        })
        .catch(err => console.log(err))
    })
    .catch( err => console.log(err));
}

module.exports = addStudentSubject;