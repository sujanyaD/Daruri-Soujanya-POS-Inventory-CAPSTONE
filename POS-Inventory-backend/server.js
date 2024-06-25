
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
const authRoutes = require('./routes/auth.js');


//middlewares
//cors middle ware
app.use(cors());
//body parser middleware
app.use(express.json());
//for Moran plugin
 app.use(morgan('dev'));


//routes
app.use('/', productRouter);
app.use('/users',userRouter);
app.use('/sales',salesRouter);
app.use('/api', authRoutes);


//error handling middleware
app.use((err,req,res,next)=>{
  console.log(req.body);
  res.status(500).send('something went wrong');
})

 // Calling the listen function telling the server to listen on port 3000
 app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`.yellow);
});

