const express=require("express");
const cors = require("cors")
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT || 3000;
require('dotenv').config();
const routes=require("./routes/todoroute")


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to mongo db")).catch((err)=>console.log("error in connection..."));
app.use(routes);




app.listen(PORT,()=>{
    console.log(`listen at port ${PORT} `)
})

