import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
});

export const TestModel = mongoose.model("Test", testSchema);

