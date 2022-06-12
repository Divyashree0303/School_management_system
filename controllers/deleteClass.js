const User = require('../models/class');

const deleteClass = (req,res) => {
    id = req.params.classId;
    console.log(id);

    User.deleteOne({_id : id})
    .then( (docs) => {
        if(docs === null){
            res.status(404).send('class not found');
        }
        res.status(200).json( {classId : id , message : "class removed"} );
    })
    .catch(err => res.send(err.message));

}

module.exports = deleteClass;