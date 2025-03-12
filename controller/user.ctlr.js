const User = require('../model/user.model');
const bcryptjs = require('bcryptjs');

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
}

async function handleFindAllUsers(req,res){
    try {
        const result = await User.find();
        return res.json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {handleUserSignup,handleFindAllUsers};