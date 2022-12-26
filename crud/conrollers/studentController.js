import StudentModel from "../models/studentModel.js";

const createDoc = async () => {
  try {
    const studentDoc = new StudentModel({
      name: "Deepak Patel",
      age: 22,
      hobbies: ["cricket", "coding", "chess"],
      isActive: true,
    });

    // saving docs

    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default createDoc;
