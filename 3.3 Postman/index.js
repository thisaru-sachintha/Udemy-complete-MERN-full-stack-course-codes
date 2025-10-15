import express from "express";
const app= express();
const port =3000;

app.get("/",(req,res)=>{
    res.send("Home");
});

app.post("/register",(req,res)=>{
    res.sendStatus(200);
});

app.put("/user/ts",(req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/ts",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/ts",(req,res)=>{
    res.sendStatus(200);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
});