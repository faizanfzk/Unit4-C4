const express=require("express");

const app=require("./index")
const connect=require("./configs/db");

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("Listenuing on port 5000");
    } catch (error) {
        console.log(error.message)
    }
})