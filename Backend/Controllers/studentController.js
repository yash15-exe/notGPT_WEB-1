import { TestModel } from "../Models/testModel.js";
import mongoose from "mongoose";
export const studentControllerRegister = (req, res) => {
  const request = req.body;
  const id = request.id;
  TestModel.create({
    id: id,
  });
  res.send("Hello from student dashboard");
};
export const studentControllerLogin = (req, res) => {
    const request = req.body;
    const id = request.id;
    TestModel.create({
      id: id,
    });
    res.send("Hello from student dashboard");
  };
  