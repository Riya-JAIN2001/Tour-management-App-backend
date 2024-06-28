import express from "express";
import { updateUser,deleteUser, getsingleUser, getAllUser } from "../controller/UserController.js";
const router =express.Router();

import { verifyUser } from './../utils/verify.js';
router.put ("/update-user/:id",verifyUser, updateUser);
 router.delete ("/delete-user/:id",verifyUser,deleteUser);
 router.get ("/single-user/:id",verifyUser,getsingleUser);
 router.get ("/All-user",verifyUser,getAllUser);
 export default router;