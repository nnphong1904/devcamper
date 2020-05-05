const express = require('express');
const dotenv = require('dotenv');


//load env vars
dotenv.config({path:'./config/config.env'});

//route files
const bootcamps = require('./routes/bootcamp');
//init server 

const app = express();

//route define

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`); 
});
