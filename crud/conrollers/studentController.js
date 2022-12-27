// import StudentModel from "../models/studentModel.js";

// const createDoc = async () => {
//   try {
//     const studentDoc = new StudentModel({
//       name: "Deepak Patel",
//       age: 22,
//       hobbies: ["cricket", "coding", "chess"],
//       isActive: true,
//     });

//     // saving docs

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };


// const createDoc = async (nm,ag,hob,isact) => {
//   try {
//     const studentDoc = new StudentModel({
//       name: nm,
//       age: ag,
//       hobbies:hob ,
//       isActive: isact,
//     });

//     // saving docs

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// insert many
// const createDoc = async () => {
//   try {
//     const siriusDoc = new StudentModel({
//       name: "sirius",
//       age: 26,
//       hobbies:['cricket','coding'] ,
//       isActive: true,
//     });
//     const samDoc = new StudentModel({
//       name: "sam",
//       age: 30,
//       hobbies:['cricket','coding'] ,
//       isActive: true,
//     });

//     // saving docs

//     const result = await StudentModel.insertMany([siriusDoc,samDoc]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default createDoc;
