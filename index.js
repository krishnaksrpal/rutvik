const express = require("express");
const app = express();
var fs = require("fs");
var file = fs.readFileSync("./posts.json")
var data = JSON.parse(file);
app.use(express.static("root"));
app.use(express.json());

app.get("/data",(req,res)=>{
    res.send(data);
})

app.post("/data",(req,res)=>{
    data.push(req.body);
    fs.writeFileSync("./posts.json",JSON.stringify(data,null,2))
    res.send(req.body);
})

app.listen(3000,()=>{
    console.log("listening");
})