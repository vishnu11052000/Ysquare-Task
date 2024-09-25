const mongoose=require('mongoose');
// require('dotenv').config();




// console.log("Loaded Environment Variables:", process.env);

const connectDb=async()=>{
    try {
        // console.log("MONGO_URI:", process.env.MONGO_URI);
        await mongoose.connect('mongodb+srv://vishnuvish1105:up9HzG8mzt2zlsfQ@cluster0.x7spoim.mongodb.net/newdata')
        console.log('MongoDb Connected Successfully');
        
    } catch (error) {
        console.log('Error Message',error);
        
    }
}


module.exports=connectDb;