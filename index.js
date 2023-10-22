const e=require("express");
const path=require("path");
const express=e();
const port=3000;
const EndPoint=require('./EndPoint');

console.log(__dirname+"\\index.html");

console.log(path.join(__dirname,'index.html'));

// console.log(Math.min(10,20));

function customMiddleWare(req,res,next){
    console.log("THis is a modlleware from index.js");
    next();
}

express.use(e.json());

express.use(customMiddleWare);

express.use('/',EndPoint);

/* express.use(e.static(path.join(__dirname,'public')));

express.use((req,res,next)=>{
    console.log("middleware"+(new Date()));
    console.log(req.body);
    next();
}) *//* 
function customMiddleWare(req,res,next){
    console.log("i am a middle ware"+req)
    next();
}

express.use(customMiddleWare);
express.use(e.json());

express.get('/myfiles/AmazonWebsite/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

express.get('/home/:name',(req,res)=>{
    console.log(req.params);
    res.send(`This is the home page! and i have extracted name from url ${req.params.name}`);
})

express.get('/getUserData',(req,res)=>{
    res.json({
        "name":"Rakshith",
        "age":20
    })
})

express.get('/aboutUs',(req,res)=>{
    res.send("This is the about page!");
})

express.post('/login',(req,res)=>{
    console.log(req.body);
    res.send(`You have logined successfully! and your username is ${req.body.username}`);
}) */

// console.log(__dirname+'\\index.html');
express.listen(port);