import { model } from "mongoose";
import userModels from "../models/userModels.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerCOntroller = async (req, res) => {
  try {
    const { name, email, password, phone, address ,answer} = req.body;
    // validation
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }
    if (!answer) {
      return res.send({ message: "answer is required" });
    }
    // check user
    const existingUser = await userModels.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register Please Login",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModels({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "user Registration sucessfull",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

//POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password or email",
      });
    }
    // check user
    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role  
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

// Forget Password Controller

export const ForgotPasswordController= async(req,res)=>{
  try{
    const {email,answer,newPassword} = req.body
    if(!email){
      res.status(400).send({message:'Email is required'})
    }
    if(!answer){
      res.status(400).send({message:'answer is required'})
    }
    if(!newPassword){
      res.status(400).send({message:'newpassword is required'})
    }
    // check
    const user = await userModels.findOne({email,answer})
    // validation
    if(!user){
      return res.status(404).send({
        success: false,
        message: 'Wrong Email or Answer'
      })
    }
    const hashed = await hashPassword(newPassword)
    await userModels.findByIdAndUpdate(user._id,{ password : hashed });
    res.status(200).send({
      success: true,
      message: "Password Rest Sucessfully",
    })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'something went Wrong',
      error
    })
  }
};

// test controller

export const testCotrollers=(req,res)=>{
  res.send("Protected route")
}
