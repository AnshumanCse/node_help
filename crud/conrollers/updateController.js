import StudentModel from "../models/studentModel.js";

const updateDoc = async (a) => {
  try {
    // const result = await StudentModel.findByIdAndUpdate(id, { name: "josbuttler" },{returnDocument: "after"});
    // update one
    // const result = await StudentModel.updateOne({_id:id},{name:'Sujit'})
    // const result = await StudentModel.updateOne(
    //   { _id: id },
    //   { name: "Arjun" },
    //   { upsert: true }
    // );
    // const result = await StudentModel.updateOne({age:a},{name:"Suaha"})
    // update many
    const result = await StudentModel.updateMany({age:a},{name:'changed name'})
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default updateDoc;
