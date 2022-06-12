const mongoose = require('mongoose');

const studentClassSchema = mongoose.Schema({

    studentName : String,
    className : String
})

const StudentClass = new mongoose.model('StudentClass', studentClassSchema);

module.exports = StudentClass;