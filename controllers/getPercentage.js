const Student = require('../models/student');
const {StudentSubject} = require('../models/student_subject');
const scorecard = require('../models/scorecard');

const getPercentage = (id) => {
     let n = 0;
     let sum = 0;
     let percentage;
     let studentName;

    Student.findOne({_id : id})
    .then( docs => {
        studentName = docs.name;
        StudentSubject.find({studentName : docs.name })
        .then(docs => {
            docs.forEach( doc => {
                sum = sum + doc.score;
                n = n + 1;
             });

              percentage = sum/n ;
              console.log(percentage);
              scorecard.updateOne({studentName : studentName},{percentage : percentage})
              .then( docs => {
                console.log(docs);
              })
              .catch(err => console.log(err));
        }).catch( err => console.log(err));
    })
    .catch( err => console.log(err));

}

module.exports = getPercentage;