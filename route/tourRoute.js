 
 import express from "express";
 import {createTour, deleteTour, getAllTour, getFeaturedTour, getTourBySearch, getTourCount, getsingleTour, updateTour} from "../controller/TourController.js";
 const router = express.Router();
 import { verifyAdmin } from "../utils/verify.js";
 router.post ("/create-tour",verifyAdmin,createTour);
 router.put ("/update-tour/:id",verifyAdmin,updateTour);
 router.delete ("/delete-tour/:id",verifyAdmin,deleteTour);
 router.get ("/tour/:id",getsingleTour);
 router.get ("/",getAllTour);
 router.get ("/search/getTourBySearch",getTourBySearch);
 router.get ("/search/getFeature",getFeaturedTour);
 router.get ("/search/getTourCount",getTourCount);


 export default router;
