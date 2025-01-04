import mongoose from "mongoose";

const effortSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Effort=mongoose.model("Effort", effortSchema);

export default Effort;