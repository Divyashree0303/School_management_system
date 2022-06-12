const Scorecard = require('../models/scorecard');


const getRanklist = (req,res) => {
    
    let n=0;

    Scorecard.find()
    .sort({percentage : -1})
    .then( docs => {
        
       docs.forEach( doc => {
         n= n+1;
         Scorecard.updateOne({studentName : doc.studentName}, {rank : n})
         .then(doc => {
            console.log(doc);
         })
         .catch(err => console.log(err));
        })

        res.json(docs)
        
    })
    .catch( err => console.log(err))
}

module.exports= getRanklist;