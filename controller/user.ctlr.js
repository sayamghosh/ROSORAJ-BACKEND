const User = require('../model/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
require("dotenv").config();

async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);
    try {
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword,
        })
        return res.json({...newUser._doc,message:"User created successfully"}) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    try {
        const foundUser = await User.findOne({email:email});
        
        if(!foundUser){
            return res.status(400).json({error:"User not found"})
        }
        const isValid = await bcryptjs.compare(password,foundUser.password);
        if(!isValid){
            return res.status(400).json({error:"Invalid password"})
        }
        const payload = {
            id: foundUser._id,
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        res.cookie('token',token,{httpOnly:true})
        return res.json({message:"User logged in successfully"})
    } catch (error) {
        return res.json(error)
    }
}

async function handleLogout(req,res){
    res.clearCookie('token');
    return res.json({message:"User logged out successfully"})
}

async function handleFindAllUsers(req,res){
    try {
        const result = await User.find();
        return res.json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {handleUserSignup,handleFindAllUsers,handleUserLogin,handleLogout};