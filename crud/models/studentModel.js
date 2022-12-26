import mongoose from "mongoose";

const studSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 50,
    },
    hobbies: {
      type: Array,
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("student", studSchema);

export default StudentModel
