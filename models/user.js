const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
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
    role : String,
    auth_token : String
})

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

const User = new mongoose.model('User', userSchema);

// const user = User.create({
//     name: "Principal",
//     email_id : "principal@gmail.com",
//     password : "Principal@123",
//     role : "admin",
//     auth_token: ""
// })



module.exports = User;