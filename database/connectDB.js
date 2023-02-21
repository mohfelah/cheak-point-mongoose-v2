const mongoose = require("mongoose")
const connectDB = async() =>{
    try {
        await mongoose.set("strictQuery",false)
                      .connect(process.env.MONGO_URI,{useNewUrlParser : true})
                      console.log("Database connect success")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDB