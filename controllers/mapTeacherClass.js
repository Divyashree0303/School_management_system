const TeacherClass = require('../models/teacher_class');
const Teacher = require('../models/teacher');
const Class = require('../models/class');


const mapTeacherClass = (req,res) => {
   
    let teacherId = req.params.teacherId;
    let classId = req.params.classId;
    let teacherName ;
    let className ;

    console.log(teacherId,classId);

    Class.findOne({_id : classId } )
    .then((docs) => {
            className = docs.className;
            Teacher.findOne({_id : teacherId})
            .then((teacher) => {
                    teacherName = teacher.name;
                    TeacherClass.create({teacherName : teacherName , className : className})
                    .then( teacherClass => {
                            res.status(201).json({teacherClass , message : 'teacher mapped to class'});
                    })
                    .catch(err => console.log(err))  
            })  
            .catch( err => console.log(err)) ;         
    })
    .catch( err => console.log(err));
}
    
module.exports = mapTeacherClass;