import express from "express";
import cors from"cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import questionroutes from "./routes/Question.js"
import userRoutes from "./routes/user.js"
import answerRoutes from "./routes/Answer.js"
import path from "path"
import {fileURLToPath} from 'url';


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.get("/",(req,res)=>{
    res.send("This is a stack overflow clone");
})

app.use("/user",userRoutes)
app.use("/questions",questionroutes);
app.use("/answer",answerRoutes)
 
const PORT = process.env.PORT||5000;
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./Frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Frontend/build/index.html"));
});


// app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)});

mongoose.connect(process.env.MONGOURL).then(()=>(app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})));

