import express from "express";
import { committeeMemberController } from "../Controllers/committeeMemberController.js";
const router = express.Router();

router.get("/", committeeMemberController);

export default router;
