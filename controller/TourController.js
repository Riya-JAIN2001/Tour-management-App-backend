
import TourModel from "../models/Tour.js"
export const createTour = async(req,res)=>{
    const newTour= new TourModel(req.body);
   try {
      const savedTour= await newTour.save();
      res.status(200).json({success:true,message:"tour created Successfull",Data:savedTour})
   } catch (error) {
    console.log(error)
    res.status(400).json({success:false,message:"there is some issue",error})
    
   }
 }
 export const updateTour =async(req,res)=>{
   const id=req.params.id
   try {
      const updateTour= await TourModel.findByIdAndUpdate(id,{
         $set:req.body
         
      },{new:true})
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:updateTour,
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

 export const deleteTour =async(req,res)=>{
   const id=req.params.id
   try {
      const deleteTour= await TourModel.findByIdAndDelete(id)
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
 export const getsingleTour =async(req,res)=>{
   const id=req.params.id
   try {
      const Tour= await TourModel.findById(id).populate('reviews')
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:Tour,
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
 export const getAllTour =async(req,res)=>{
   const page =  parseInt(req.query.page);
   
   
   try {
      const Tour= await TourModel.find({}).populate('reviews').skip((page)*8).limit(8)
      res.status(200).json({
         success:true,
         message:"Successfully update",
         data:Tour,
         count:Tour.length
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

 export const getTourBySearch= async(req, res)=>{
 
   const city =new RegExp(req.query.city,"i");
   const distance=parseInt(req.query.distance);
   const maxGroupSize=parseInt(req.query.maxGroupSize);
   try{
      const tours=await TourModel.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
      res.status(200).json({
         success:true,
         message:"Successfully ",
         data:tours,
         count:tours.length
      })
   }catch(error){
      res.status(400).json({
         success:false,
         message:"some Error",
         error
      })
   }
 }


 export const getFeaturedTour =async(req,res)=>{
   
   
   try {
      const Tour= await TourModel.find({featured:true}).populate('reviews').limit(8)
      res.status(200).json({
         success:true,
         message:"Successfully ",
         data:Tour,
         
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

 export const getTourCount=async(req,res)=>{
   try{
      const tourCount= await TourModel.estimatedDocumentCount();
      res.status(200).json({
         success:true,
         message:"Successfully ",
         data:tourCount,
         
      })
   }
   catch(error){
      res.status(500).json({
         success:false,
         message:" not found",
         error
         
      })
   }
 }