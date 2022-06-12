const Class = require('../models/class');

const addClass = (req,res) => {
   className = req.query.className;

   Class.create({className : className})
   .then ( (docs) => {
    if(docs === null){
        res.status(404).send('class not created.');
    }
    res.status(201).json({classId : docs._id , className : docs.className , message : "class created"});
   })
   .catch( err => res.send(err.message));
}

module.exports = addClass;