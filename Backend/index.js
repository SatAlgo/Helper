import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import effortRoute from "./route/effort.route.js";

const app = express();

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// Connect to MongoDB
try{
    mongoose.connect(URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    );
    console.log("Finally connected to mongodb");
}catch(error){
    console.log("Error:", error);
}

// defiing routes

app.use("/effort",effortRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});