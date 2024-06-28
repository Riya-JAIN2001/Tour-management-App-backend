import express from "express"
import { createReview } from "../controller/ReviewController.js";
import { verifyUser } from "../utils/verify.js";
const router=express.Router()
router.post('/:tourId',createReview);
export default router;