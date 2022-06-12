const User = require('../models/user');
const Teacher = require ('../models/teacher')


const addTeacher = (req,res) => {
    let name = req.query.name;
    email_id = req.query.email_id;
    password = req.query.password;



    User.create({name : name , email_id : email_id , password : password , role: "teacher" , auth_token : ""})
    .then( docs => {
        res.status(201)
    })
    .catch( err => res.send(err.message));

    Teacher.create({name : name , email_id : email_id ,role:"teacher" , password : password  , className : "" , auth_token : ""})
    .then( docs => {
        res.status(201).json({_id : docs._id , message : "teacher added"});
    })
    .catch( err => res.send(err.message));
 
}

module.exports = addTeacher;