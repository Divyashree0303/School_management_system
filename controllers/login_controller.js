require('dotenv').config()
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login_controller = (req,res) => {

    email_id = req.query.email_id; 
    password = req.query.password;

    let userRole;
    let auth_token;

    const email = {email_id : email_id};

    
    User.findOne({email_id : email_id })
    .then(function(docs){
        
            if(docs){
                const auth =  bcrypt.compare(password,docs.password);
                if(auth){
                    userRole = docs.role;
    
                    if(userRole === 'admin'){
                        auth_token =  jwt.sign(email,process.env.ACCESS_TOKEN_ADMIN);
                    }else if(userRole === 'teacher'){
                         auth_token =  jwt.sign(email,process.env.ACCESS_TOKEN_TEACHER);
                    }else if(userRole === 'student'){
                        auth_token =  jwt.sign(email,process.env.ACCESS_TOKEN_STUDENT);
                    }
                }
                

                User.updateOne({email_id : email_id},{auth_token : auth_token})
                .then( (docs) => {
                    console.log(docs);
                })
                .catch( err => console.log(err));

                res.json(docs);

            }else{
                res.status(404).send("user not found");
            }
    }).catch ( err => {
        res.send(err.message);
    })
    
    

}