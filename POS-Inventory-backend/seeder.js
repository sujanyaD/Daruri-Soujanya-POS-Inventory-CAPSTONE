const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connectDb=require('./config/db-connection');
const productModel=require('./models/productsModels.js')
const homeDecorProducts= require('./utils/data.js');


//config
dotenv.config()
connectDb();
//function seeder
const importData =async ()=>{
    try{
        console.log("import data")
        await productModel.deleteMany();
        console.log("delete many executed")
        const productsData=await productModel.insertMany(homeDecorProducts);
        console.log("All products added");
        
        await mongoose.connection.close();
        process.exit();

    }catch (error){
        console.log(`${error}`.bgRed.inverse);
        process.exit(1);
    }
};
importData();
