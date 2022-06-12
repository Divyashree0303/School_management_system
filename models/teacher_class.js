const mongoose = require('mongoose');

const teacherClassSchema = mongoose.Schema({

    teacherName : String,
    className : String
})

const TeacherClass = new mongoose.model('TeacherClass', teacherClassSchema);

module.exports = TeacherClass;