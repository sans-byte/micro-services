import express from "express";
const app = express();

app.use(express.json());

app.get("/health",(req,res)=>{
    res.json({message:"Server is running"});
})

app.listen(8080, ()=>{
    console.log("App Started");
})