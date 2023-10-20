const express=require("express");

const router=express.Router();

const port=3000;


router.get('/',(req,res)=>{
    res.send("This is a home page and getReguest");
})

router.post('/login',(req,res)=>{
    res.send(`You have logined successfully! and your username is ${req.body.name}`);
})

router.put('/post/:id',(req,res)=>{
    res.send(`You have updated the profile successfully! and your id is ${req.params.id}`);
})

router.delete('/delete/:id',(req,res)=>{
    res.send(`You have deleted successfully! and your id is ${req.params.id}`);
})

module.exports=router;

