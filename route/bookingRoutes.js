import express from "express"
import { verifyAdmin, verifyUser } from "../utils/verify.js";
import { createBooking, getAllBooking, getBooking } from './../controller/BookingController.js';
const router=express.Router()
router.post('/',verifyUser,createBooking);
router.post('/:id',verifyUser,getBooking);
router.post('/',verifyAdmin,getAllBooking);

export default router;