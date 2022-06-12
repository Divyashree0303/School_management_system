const Student = require('../models/student');

const students_get = (req,res) => {

    Student.find()
    .sort({name: 1})
    .then(docs => {
        if(docs === null){
            res.status(404).send('students not found')
        }

        res.status(200).json(docs)  ;   
    })
    .catch( err => console.log(err));
}

module.exports = students_get;