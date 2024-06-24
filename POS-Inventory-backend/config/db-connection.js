require('dotenv').config();
const mongoose = require('mongoose');

const connectDB=async () => {
try{
  const conn=await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongoose Connected ${conn.connection.host}`.yellow);
}catch(error){
  console.log(`Error:${error.message}`.bgRed);
  // process.exit(1);
}
};

mongoose.connection
  .on('open', () => console.log('Connected to Mongoose'))
  .on('close', () => console.log('Disconnected from Mongoose'))
  .on('error', (error) => console.log(error));

// module.exports = mongoose;
module.exports=connectDB;



