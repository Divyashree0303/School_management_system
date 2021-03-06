require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const loginRoute = require('./routes/loginRoutes');
const studentRoutes = require ('./routes/studentRoutes');
const app = express();

app.use(express.json());


const dbURI = process.env.URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000, () => {
    console.log('listening on port 3000.');
  })) 
  .catch((err) => console.log(err));


app.use("/",loginRoute);
app.use("/",adminRoutes);
app.use("/",teacherRoutes);
app.use('/',studentRoutes);






