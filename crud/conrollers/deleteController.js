import StudentModel from "../models/studentModel.js";

const deleteDoc = async (a) => {
  try {
    // const result = await StudentModel.findByIdAndDelete(id);
    // const result = await StudentModel.deleteOne({_id:id});

    // const result = await StudentModel.deleteOne({age:a});
    const result = await StudentModel.deleteMany({name:a});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default deleteDoc;
