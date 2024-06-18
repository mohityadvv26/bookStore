import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";

const app = express()

app.use(cors());  //this is a middleware
app.use(express.json());

dotenv.config();

// server will run on env PORT,but if it is busy will run on 3000
const PORT=process.env.PORT || 3001;
const URI=process.env.MongoDBURI; 

// connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser : true,     //we have to give these 2 if we use compass,not in mongodb atlas
        useUnifiedTopology : true,
    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("Error:",error);
    
}
 
// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})