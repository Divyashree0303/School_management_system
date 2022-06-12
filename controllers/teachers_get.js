const Teacher = require('../models/teacher');

const teachers_get = (req,res) => {

    Teacher.find()
    .then(docs => {
        if(docs === null){
            res.status(404).send('teachers not found')
        }

        res.status(200).json(docs)  ;   
    })
    .catch( err => console.log(err));
}

module.exports = teachers_get;