const e=require("express");
const express=e();
const port=3000;

express.use((req,res,next)=>{
    console.log("middleware"+(new Date()));
    console.log(req.body);
    next();
})
express.use(e.json());

express.get('/myfiles/AmazonWebsite',(req,res)=>{
    res.sendFile(__dirname+'\\index.html');
})

express.get('/',(req,res)=>{
    res.send("This is the home page!");
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
})

// console.log(__dirname+'\\index.html');
express.listen(port);