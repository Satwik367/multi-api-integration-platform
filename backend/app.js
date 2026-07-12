const express=require("express");
const cors=require("cors");

require("dotenv").config();

const authRoutes=require("./routes/authRoutes");
const weatherRoutes=require("./routes/weatherRoutes");
const githubRoutes=require("./routes/githubRoutes");
const newsRoutes=require("./routes/newsRoutes");
const currencyRoutes=require("./routes/currencyRoutes");
const geminiRoutes=require("./routes/geminiRoutes");
const workflowRoutes=require("./routes/workflowRoutes");
const logRoutes=require("./routes/logRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes");

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

res.json({

message:"Backend Running"

});

});

app.use("/api/auth",authRoutes);

app.use("/api/weather",weatherRoutes);

app.use("/api/github",githubRoutes);

app.use("/api/news",newsRoutes);

app.use("/api/currency",currencyRoutes);

app.use("/api/gemini",geminiRoutes);

app.use("/api/workflows",workflowRoutes);

app.use("/api/logs",logRoutes);

app.use("/api/dashboard",dashboardRoutes);

module.exports=app;