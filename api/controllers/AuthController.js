import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req,res,next)=>{
    //console.log(req.body);
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);//salt number
    const newUser=new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User created successfully!");
    }
    catch(err){
        //res.status(500).json(err.message);
        next(err);
        //next(errorHandler(550,'Error from the function'));
    }
};

export const signin = async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const validUser=await User.findOne({email:email});
        if(!validUser)
        return next(errorHandler(404,'User not found!'));
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword)
        return next(errorHandler(401,'Wrong credentials!'));

        //creating json web tokens
        const token=jwt.sign({id:validUser._id }, process.env.JWT_SECRET);
        const {password:pass , ...rest}=validUser._doc;//password should not appear after signing in
        res.cookie('access_token',token,{httpOnly:true})//securing cookie so that no third party can access it   
           .status(200)
           .json(rest);     
    }
    catch(err){
        next(err);
    }
};

export const google=async(req,res,next)=>{
    try{
        const user=await User.findOne({email: req.body.email});
        if(user)
        {
            const token=jwt.sign({id:validUser._id }, process.env.JWT_SECRET);
            const {password:pass , ...rest}=validUser._doc;//password should not appear after signing in
            res.cookie('access_token',token,{httpOnly:true})//securing cookie so that no third party can access it   
               .status(200)
               .json(rest);   
        }
        else
        {
            const generatedPassword=Math.random().toString(36).slice(-8);//last 8 digits
            const hashedPassword=bcryptjs.hashSync(generatedPassword,10);
            const newUser=new User({username:req.body.name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-4), 
                                    email:req.body.email ,
                                    password:hashedPassword,
                                    avatar:req.body.photo});
            await newUser.save();
            const token=jwt.sign({id:validUser._id }, process.env.JWT_SECRET);
            const {password:pass , ...rest}=validUser._doc;//password should not appear after signing in
            res.cookie('access_token',token,{httpOnly:true})//securing cookie so that no third party can access it   
               .status(200)
               .json(rest);   
        }
    }
    catch(err){
        next(err);
    }
};

export const signOut=async(req,res,next)=>{
    try{
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out!');
    }
    catch(err){
        next(err);
    }
}