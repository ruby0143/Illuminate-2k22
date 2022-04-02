//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use("/public",express.static("public"));

mongoose.connect("mongodb+srv://ruby07:8074662205s@cluster0.97u8x.mongodb.net/eventDB", {useNewUrlParser: true});

const formSchema = {
    eventName : String,
    t1Name : String,
    t1Rno : String,
    t2Name : String,
    t2Rno : String,
    t3Name : String,
    t3Rno : String,
    t4Name : String,
    t4Rno : String,
    email : String,
    mobile : Number,
    college : String,
    branch : String
};

const ruleSchema = {
    name : String,
    rules : Object
};

const rUser = mongoose.model("RUser",formSchema);

const rule = mongoose.model("Rule",ruleSchema);


app.get("/",(req,res)=>{
    res.render("animation");
});

app.get("/home",function(req,res){
    res.render("home");
});

app.get("/tech",(req,res)=>{
    res.render("tech");
});

app.get("/nontech",(req,res)=>{
    res.render("nontech");
});

app.get("/mba",(req,res)=>{
    res.render("mba");
});

app.get("/register/:event/:key",function(req,res){
    const event = req.params.event;
    const key = req.params.key;
    res.render("register",{ename : event, keys : key});
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/thankyou",(req,res)=>{
    res.render("thankyou");
});

app.get("/8074662205",(request,response)=>{
    rUser.find({},(req,res)=>{
        response.send(res);
    });
});



app.post("/register",function(req,res){
    const event = req.body.event;
    const key = req.body.decider;
    if(event === "Treasure Hunt" || event==="Gaming"){
        res.send("Registrations will open soon.")
    }
    res.redirect(`/register/${event}/${key}`);
});

app.post("/",(req,res)=>{
    if(req.body.key===1){
        const user =  new rUser({
            eventName : req.body.eventName,
            t1Name : req.body.t1name,
            t1Rno : req.body.t1no,
            college : req.body.college,
            branch : req.body.branch,
            email : req.body.email,
            mobile : req.body.mobile
        });
        user.save();
    }
    else if(req.body.key===2){
        const user =  new rUser({
            eventName : req.body.eventName,
            branch : req.body.branch,
            t1Name : req.body.t1name,
            t1Rno : req.body.t1no,
            t2Name : req.body.t2name,
            t2Rno : req.body.t2no,
            college : req.body.college,
            email : req.body.email,
            mobile : req.body.mobile
        });
        user.save();
    }
    else{
        const user =  new rUser({
            eventName : req.body.eventName,
            branch : req.body.branch,
            t1Name : req.body.t1name,
            t1Rno : req.body.t1no,
            t2Name : req.body.t2name,
            t2Rno : req.body.t2no,
            t3Name : req.body.t3name,
            t3Rno : req.body.t3no,
            t4Name : req.body.t4name,
            t4Rno : req.body.t4no,
            college : req.body.college,
            email : req.body.email,
            mobile : req.body.mobile
        });
        user.save();
    }
    res.render("thankyou");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
  