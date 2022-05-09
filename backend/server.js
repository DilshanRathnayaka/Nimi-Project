const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const dotenv =require("dotenv");


dotenv.config();
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
})

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("DB Connection Succesfull");
})

const app =express();
const PORT =process.env.port || 8070

app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})

app.use('/user',require('./routes/profile'));
app.use("/api/auth", require("./routes/auth"));