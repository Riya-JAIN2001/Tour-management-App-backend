import TourModel from "../models/Tour.js"
import ReviewModel from "../models/Review.js"


export const createReview=async(req, res)=>{
    const tourId=req.params.tourId
    const newReview=new ReviewModel({...req.body})

    try {
       const savedReview=await newReview.save();
       await TourModel.findByIdAndUpdate(tourId,{
        $push:{reviews:savedReview._id}
       })
       res.status(200).json({success:true,message:"Review submitted",data:savedReview})
        
    } catch (error) {
        res.status(401).json({success:false,message:"failed",error})
   
    }

}