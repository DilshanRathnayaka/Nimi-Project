const mongoose =require("mongoose");
const Schema =mongoose.Schema;

const Profile =new Schema({
    fname:String,
    lname:String,
    email:String,
    phone:Number,
    address:String,
    password:String,
    confirmPassword:String,
});

const newProfile =mongoose.model("profile",Profile);
module.exports=newProfile;