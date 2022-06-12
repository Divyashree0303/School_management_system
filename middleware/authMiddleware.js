require('dotenv').config()
const jwt = require('jsonwebtoken');


module.exports.adminAuth = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const auth_token = authHeader && authHeader.split(' ')[1]
    if (auth_token == null) return res.sendStatus(401);

    jwt.verify(auth_token, process.env.ACCESS_TOKEN_ADMIN, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    console.log(user);
    next()
  })

}

module.exports.teacherAuth = (req,res,next) => {
  const authHeader = req.headers['authorization'];
  const auth_token = authHeader && authHeader.split(' ')[1]
  if (auth_token == null) return res.sendStatus(401);

  jwt.verify(auth_token, process.env.ACCESS_TOKEN_TEACHER, (err, user) => {
  console.log(err)
  if (err) return res.sendStatus(403)
  req.user = user
  console.log(user);
  next()
})
}

module.exports.studentAuth = (req,res,next) => {
  const authHeader = req.headers['authorization'];
  const auth_token = authHeader && authHeader.split(' ')[1]
  if (auth_token == null) return res.sendStatus(401);

  jwt.verify(auth_token, process.env.ACCESS_TOKEN_STUDENT, (err, user) => {
  console.log(err)
  if (err) return res.sendStatus(403)
  req.user = user
  console.log(user);
  next()
})
}

