import User from "../models/User.js";
import UserModel from "../models/User.js"
export const createUser = async(req,res)=>{
    const newUser= new UserModel(req.body);
   try {
      const savedUser= await newUser.save();
      res.status(200).json({success:true,message:"User created Successfull",Data:savedUser})
   } catch (error) {
    console.log(error)
    res.status(400).json({success:false,message:"there is some issue",error})
    
   }
 }
 export const updateUser =async(req,res)=>{
   const id=req.params.id
   try {
      const updateUser= await UserModel.findByIdAndUpdate(id,{
         $set:req.body
         
      },{new:true})
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:updateUser,
      })
   } catch (error) {
      console.log(error);
      res.status(200).json({
         success:false,
         message:"ther issome issue",
         error,
      })
   }
 }

 export const deleteUser =async(req,res)=>{
   const id=req.params.id
   try {
      const deleteUser= await UserModel.findByIdAndDelete(id)
      res.status(200).json({
         success:true,
         message:"Successfully deleted",
         data:deleteTour,
      })
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success:false,
         message:"ther issome issue",
         error,
      })
   }
 }
 export const getsingleUser =async(req,res)=>{
   const id=req.params.id
   try {
      const User= await UserModel.findById(id)
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:User,
      })
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success:false,
         message:"ther issome issue",
         error,
      })
   }
 }
 export const getAllUser =async(req,res)=>{
   
   try {
      const User= await UserModel.find({});
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:User,
         count:User.length
      })
      
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success:false,
         message:"ther issome issue",
         error,
      })
   }
 }
