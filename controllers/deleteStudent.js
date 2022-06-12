const User = require('../models/user');
const Student = require('../models/student');

const deleteStudent = (req,res) => {
    id = req.params.studentId;
    let studentName;
    console.log(id);

    Student.findByIdAndDelete(id)
    .then((docs) => {
            studentName=docs.name
            User.deleteOne({name:studentName})
            .then( (err) => {
                if(err){
                    console.log(err);
                }
                res.json({ name:studentName, message: 'student removed'});
            })
            .catch(err => console.log(err))
        }
    )
    .catch( err => console.log(err))

}

module.exports = deleteStudent;