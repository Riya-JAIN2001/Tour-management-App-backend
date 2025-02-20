import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors  from 'cors';
import tourRoute from "./route/tourRoute.js"
import userRoute from "./route/userRoute.js"
import authRoute from "./route/authRoute.js"
import reviewRoutes from "./route/reviewRoutes.js"
import bookingRoutes from "./route/bookingRoutes.js"
import bodyParser from "body-parser";
dotenv.config();
const app= express();
const port= process.env.PORT||1000;
const corsOptions={
    origin:true,
    methods:["Get", "Post"],
    credentials:true
}


app.get("/", (req,res)=>{
    res.send("working")
});
mongoose.set("strictQuery",false);
const Connect=async ()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Database is connected");
    }
    catch(error){
        console.log(error)
    }
}


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen( port,()=>{
    Connect();

    console.log(`server is running on the port ${port}`)
})

