import { TestModel } from "../Models/testModel.js";
import mongoose from "mongoose";
export const committeeMemberController = (req, res) => {
  const request = req.body;
  const id = request.id;
  TestModel.create({
    id: id,
  });
  res.send("Hello from student dashboard");
};
