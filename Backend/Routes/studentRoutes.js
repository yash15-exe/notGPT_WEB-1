import express from "express";
import {  studentControllerLogin, studentControllerRegister } from "../Controllers/studentController.js";
const router = express.Router();

router.get("/login", studentControllerLogin );
router.get("/register", studentControllerRegister)

export default router;
