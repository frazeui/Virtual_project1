const { default: mongoose } = require("mongoose");

// Database connection by Async Method

const Model=async ()=>{
    try{
        const db=await mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`MongoDb Connected Successfully`);
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
}

module.exports=Model;