const express = require('express')
const { jwt } = require('jsonwebtoken')
const user=require('../Model/User')
const Auth = require('../middlewares/auth')

const router=express.Router();
const port = 3000;

router.post('/register',async (req,res)=>{
    try{
        const {username,email,body}=req.body
        // Check User Already signed it up or not 
        const user_exist=await user.findOne({
            $or:[{username},{email}]
        });
        if (user_exist){
            return res.status(201).json({message:"User with this email or username already exist"});
        }

        // Creating the New User
        const create_user=new user({email,username,password});
        await create_user.save();

        // We'll generate the token of it for sending to the server
        
    }
})