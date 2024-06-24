
require('dotenv').config();
const express = require('express');
const app = express();
const morgan=require('morgan');//used morgan for logging HTTP request for node.js
const PORT = process.env.PORT || 5000; // Port in which the server will run on
const cors=require('cors');
const { bgCyan } = require("colors");
require("colors");
const connectDb = require('./config/db-connection.js');
connectDb();
const productRouter= require('./routes/productsRoutes.js');
const userRouter=require('./routes/usersRoutes.js');
const salesRouter=require('./routes/salesRoutes.js')

//middleware
app.use(cors());
app.use(express.json());
 app.use(morgan('dev'));


//routes
app.use('/', productRouter);
app.use('/users',userRouter);
app.use('/sales',salesRouter);


//error handling middleware
app.use((err,req,res,next)=>{
  res.status(500).send('something went wrong');
})

 // Calling the listen function telling the server to listen on port 3000
 app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`.yellow);
});

