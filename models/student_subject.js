const mongoose = require('mongoose');

studentSubjectSchema = mongoose.Schema({

    studentName : String,
    subjectName : String,
    dateOfExam : Date,
    score : Number
})

StudentSubject = new mongoose.model('StudentSubject', studentSubjectSchema);

module.exports = {
    studentSubjectSchema,
    StudentSubject
}

