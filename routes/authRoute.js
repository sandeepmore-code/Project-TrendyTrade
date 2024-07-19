import express from "express";
import {
  ForgotPasswordController,
  loginController,
  registerCOntroller,
  testCotrollers,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST

router.post("/register", registerCOntroller);

// LOGIN || METHOD POST
router.post("/login", loginController);

// Forgot Password || POST

router.post("/forgot-password", ForgotPasswordController)

// test routes

router.get("/test", requireSignin,isAdmin, testCotrollers);

// Protected user Routes Auth

router.get("/user-auth", requireSignin, ( req,res)=> {
  res.status(200).send({ok:true});
});

// Admin Rotes.
router.get("/admin-auth", requireSignin,isAdmin,(req,res)=>{
  res.status(200).send({ ok:true });
});

export default router;
