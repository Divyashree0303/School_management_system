const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const teacherSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email_id : {
        type : String,
        required : true
    },
    password : {
        type : String,
        minlength : 6,
        required : true
    },
    auth_token : String
})

teacherSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

const Teacher = new mongoose.model('Teacher', teacherSchema);

// const user = User.create({
//     name: "Principal",
//     email_id : "principal@gmail.com",
//     password : "Principal@123",
//     role : "admin",
//     auth_token: ""
// })



module.exports = Teacher;