const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    className : String
})

const Class = new mongoose.model('Class', classSchema);

module.exports = Class;