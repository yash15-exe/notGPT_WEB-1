import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import studentRoutes from "./Routes/studentRoutes.js";
import committeeMemberRoutes from "./Routes/committeeMemberRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/Agnethon")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((e) => {
    console.log("Something went wrong in DB connection" + e);
  });

app.use("/student", studentRoutes);
app.use("/committeeMember", committeeMemberRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening");
});
