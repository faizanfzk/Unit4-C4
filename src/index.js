const express=require("express")



const {register,login}=require("./controller/auth.controller")
const todoController=require("./controller/todo.controller")


const app=express();
app.use(express.json());
app.use("/todos",todoController)

app.post("/register",register)
app.post("/login",login)

module.exports=app;
