const User = require('../models/user');
const Teacher = require('../models/teacher');

const deleteTeacher = (req,res) => {
    id = req.params.teacherId;
    let teacherName;
    console.log(id);

    Teacher.findByIdAndDelete(id)
    .then((docs) => {
            teacherName=docs.name
            User.deleteOne({name:teacherName})
            .then( (err) => {
                if(err){
                    console.log(err);
                }
                res.json({ name:teacherName, message: 'teacher removed'});
            })
            .catch(err => console.log(err))
        }
    )
    .catch( err => console.log(err))

}

module.exports = deleteTeacher;