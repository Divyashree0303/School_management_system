const Scorecard = require('../models/scorecard');
const Student = require('../models/student');

const getScorecard = (req,res) => {

   let studentId = req.params.studentId;

   Student.findOne({_id : studentId})
   .then( docs => {

    Scorecard.findOne({studentName : docs.name })
    .then( docs => {
        res.status(200).json(docs);
    })
    .catch( err => console.log(err));
   })
   .catch( err => console.log(err));

}

module.exports = getScorecard;