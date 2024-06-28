

import BookingModel  from "../models/Booking.js"
export const createBooking =async(req,res)=>{
   const newBooking=new BookingModel(req.body)
   try {
    const savedBooking =await newBooking.save();
    res.status(200).json({success:true,message:"your tour is booked", data:savedBooking})
   } catch (error) {
    res.status(500).json({success:false,message:"Failed Booking", error})

   }
}

export const getBooking= async(req,res)=>{
    const id=req.params.id
    try {
        const book =await BookingModel.findById(id);
        res.status(200).json({success:true,message:"successfull", data:book})

    } catch (error) {
        res.status(500).json({success:false,message:"not Found", error})

    }
}
export const getAllBooking= async(req,res)=>{
    const id=req.params.id
    try {
        const books =await BookingModel.find({});
        res.status(200).json({success:true,message:"successfull", data:books})

    } catch (error) {
        res.status(500).json({success:false,message:"not Found", error})

    }
}