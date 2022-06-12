const StudentClass = require('../models/student_class');
const Student = require('../models/student');
const Class = require('../models/class');


const mapStudentClass = (req,res) => {
   
    let studentId = req.params.studentId;
    let classId = req.params.classId;
    let studentName ;
    let className ;

    console.log(studentId,classId);

    Class.findOne({_id : classId } )
    .then((docs) => {
            className = docs.className;
            Student.findOne({_id : studentId})
            .then((student) => {
                    studentName = student.name;
                    StudentClass.create({studentName : studentName , className : className})
                    .then( studentClass => {
                            res.status(201).json({studentClass , message : 'student mapped to class'});
                    })
                    .catch(err => console.log(err))  
            })  
            .catch( err => console.log(err)) ;         
    })
    .catch( err => console.log(err));
}
    
module.exports = mapStudentClass;