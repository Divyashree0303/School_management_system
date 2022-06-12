const User = require('../models/user');
const Student = require ('../models/student')


const addStudent = (req,res) => {
    let name = req.query.name;
    email_id = req.query.email_id;
    password = req.query.password;



    User.create({name : name , email_id : email_id , password : password , role: "student" , auth_token : ""})
    .then( docs => {
        res.status(201)
    })
    .catch( err => res.send(err.message));

    Student.create({name : name , email_id : email_id , role : 'student' , password : password  , className : "" , auth_token : ""})
    .then( docs => {
        res.status(201).json({_id : docs._id , message : "student added"})
    })
    .catch( err => res.send(err.message));
 
}

module.exports = addStudent;