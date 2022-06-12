const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const studentSchema = mongoose.Schema({
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

studentSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

const Student = new mongoose.model('Student', studentSchema);

// const user = User.create({
//     name: "Principal",
//     email_id : "principal@gmail.com",
//     password : "Principal@123",
//     role : "admin",
//     auth_token: ""
// })



module.exports = Student;