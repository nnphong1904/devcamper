const express = require('express');
const dotenv = require('dotenv');


//load env vars
dotenv.config({path:'./config/config.env'});

//init server 

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`); 
});
